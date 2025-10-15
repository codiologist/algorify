/*
  Warnings:

  - You are about to drop the column `createdAt` on the `projectInquiry` table. All the data in the column will be lost.
  - You are about to drop the column `fileName` on the `projectInquiry` table. All the data in the column will be lost.
  - You are about to drop the column `fileSize` on the `projectInquiry` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "projectInquiry" DROP COLUMN "createdAt",
DROP COLUMN "fileName",
DROP COLUMN "fileSize",
ADD COLUMN     "fileurl" TEXT;
