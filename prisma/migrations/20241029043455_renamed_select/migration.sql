/*
  Warnings:

  - You are about to drop the column `selcted` on the `CartItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CartItem" DROP COLUMN "selcted",
ADD COLUMN     "checked" BOOLEAN NOT NULL DEFAULT false;
