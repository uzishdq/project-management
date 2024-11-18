/*
  Warnings:

  - You are about to drop the column `starDate` on the `project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `project` DROP COLUMN `starDate`,
    ADD COLUMN `startDate` DATETIME(3) NULL;
