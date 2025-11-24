/*
  Warnings:

  - You are about to drop the `Questionario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Resposta` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `autoestima` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `avaliacao` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `confianca` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `insegurancas` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medos` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mudancas` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Questionario";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Resposta";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "apelido" TEXT NOT NULL,
    "gmail" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "foto_de_perfil" TEXT,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "data_nascimento" DATETIME NOT NULL,
    "insegurancas" TEXT NOT NULL,
    "autoestima" TEXT NOT NULL,
    "confianca" TEXT NOT NULL,
    "medos" TEXT NOT NULL,
    "avaliacao" TEXT NOT NULL,
    "mudancas" TEXT NOT NULL
);
INSERT INTO "new_Usuario" ("apelido", "bairro", "cidade", "data_nascimento", "estado", "foto_de_perfil", "gmail", "id", "nome", "rua", "senha", "telefone") SELECT "apelido", "bairro", "cidade", "data_nascimento", "estado", "foto_de_perfil", "gmail", "id", "nome", "rua", "senha", "telefone" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_gmail_key" ON "Usuario"("gmail");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
