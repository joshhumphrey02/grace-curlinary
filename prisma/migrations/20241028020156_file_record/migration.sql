-- DropForeignKey
ALTER TABLE "FileRocord" DROP CONSTRAINT "FileRocord_productId_fkey";

-- AlterTable
ALTER TABLE "FileRocord" ALTER COLUMN "size" DROP NOT NULL,
ALTER COLUMN "mimetype" DROP NOT NULL,
ALTER COLUMN "productId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "FileRocord" ADD CONSTRAINT "FileRocord_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
