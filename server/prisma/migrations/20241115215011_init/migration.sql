/*
  Warnings:

  - You are about to drop the column `takId` on the `comment` table. All the data in the column will be lost.
  - Added the required column `taskId` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_takId_fkey`;

-- AlterTable
ALTER TABLE `comment` DROP COLUMN `takId`,
    ADD COLUMN `taskId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_taskId_fkey` FOREIGN KEY (`taskId`) REFERENCES `Task`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
