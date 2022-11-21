/*
  Warnings:

  - You are about to drop the column `accountId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Accounts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Accounts` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `balance` on the `Accounts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_accountId_fkey";

-- DropIndex
DROP INDEX "User_accountId_key";

-- AlterTable
ALTER TABLE "Accounts" ADD COLUMN     "userId" INTEGER NOT NULL,
DROP COLUMN "balance",
ADD COLUMN     "balance" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "accountId";

-- CreateIndex
CREATE UNIQUE INDEX "Accounts_userId_key" ON "Accounts"("userId");

-- AddForeignKey
ALTER TABLE "Accounts" ADD CONSTRAINT "Accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
