import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();



const checkConnection = async () => {
    try {
        await prisma.$connect();
        console.log("Database connected");
    } catch (error) {
        console.log(error);
        console.log("Database connection failed");
    }
};

export default checkConnection;