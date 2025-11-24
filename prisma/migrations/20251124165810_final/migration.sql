/*
  Warnings:

  - You are about to drop the column `bairro` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `estado` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `gmail` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `rua` on the `Usuario` table. All the data in the column will be lost.
  - Added the required column `email` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "apelido" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "foto_de_perfil" TEXT,
    "cidade" TEXT NOT NULL,
    "data_nascimento" DATETIME NOT NULL,
    "insegurancas" TEXT NOT NULL,
    "autoestima" TEXT NOT NULL,
    "confianca" TEXT NOT NULL,
    "medos" TEXT NOT NULL,
    "avaliacao" TEXT NOT NULL,
    "mudancas" TEXT NOT NULL
);
INSERT INTO "new_Usuario" ("apelido", "autoestima", "avaliacao", "cidade", "confianca", "data_nascimento", "foto_de_perfil", "id", "insegurancas", "medos", "mudancas", "nome", "senha", "telefone") SELECT "apelido", "autoestima", "avaliacao", "cidade", "confianca", "data_nascimento", "foto_de_perfil", "id", "insegurancas", "medos", "mudancas", "nome", "senha", "telefone" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
