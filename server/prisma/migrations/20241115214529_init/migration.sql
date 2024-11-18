/*
  Warnings:

  - You are about to drop the column `fileUrl` on the `attachment` table. All the data in the column will be lost.
  - You are about to drop the column `starDate` on the `task` table. All the data in the column will be lost.
  - Added the required column `fileURL` to the `Attachment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `attachment` DROP COLUMN `fileUrl`,
    ADD COLUMN `fileURL` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `task` DROP COLUMN `starDate`,
    ADD COLUMN `startDate` DATETIME(3) NULL;
