/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "StatusKeanggotaan" AS ENUM ('pindah', 'meninggal', 'aktif');

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Jemaat" (
    "id" SERIAL NOT NULL,
    "nama_jemaat" TEXT NOT NULL,
    "tanggal_lahir" TIMESTAMP(3) NOT NULL,
    "alamat" TEXT NOT NULL,
    "nomor_telepon" VARCHAR(20) NOT NULL,
    "email" VARCHAR(40) NOT NULL,
    "status_keanggotaan" "StatusKeanggotaan" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "kartu_keluargaid" INTEGER NOT NULL,
    "rayonId" INTEGER NOT NULL,

    CONSTRAINT "Jemaat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KartuKeluarga" (
    "id" SERIAL NOT NULL,
    "nama_kepala_keluarga" TEXT NOT NULL,
    "alamat_keluarga" TEXT NOT NULL,
    "nomor_telepon_keluarga" VARCHAR(20) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "KartuKeluarga_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rayon" (
    "id" SERIAL NOT NULL,
    "nama_rayon" TEXT NOT NULL,
    "wilayah" TEXT NOT NULL,

    CONSTRAINT "Rayon_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Jemaat_email_key" ON "Jemaat"("email");

-- CreateIndex
CREATE INDEX "Jemaat_kartu_keluargaid_idx" ON "Jemaat"("kartu_keluargaid");

-- CreateIndex
CREATE INDEX "Jemaat_rayonId_idx" ON "Jemaat"("rayonId");

-- AddForeignKey
ALTER TABLE "Jemaat" ADD CONSTRAINT "Jemaat_kartu_keluargaid_fkey" FOREIGN KEY ("kartu_keluargaid") REFERENCES "KartuKeluarga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Jemaat" ADD CONSTRAINT "Jemaat_rayonId_fkey" FOREIGN KEY ("rayonId") REFERENCES "Rayon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
