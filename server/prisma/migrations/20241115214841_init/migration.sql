/*
  Warnings:

  - You are about to drop the column `taksId` on the `comment` table. All the data in the column will be lost.
  - Added the required column `takId` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_taksId_fkey`;

-- AlterTable
ALTER TABLE `comment` DROP COLUMN `taksId`,
    ADD COLUMN `takId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_takId_fkey` FOREIGN KEY (`takId`) REFERENCES `Task`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
