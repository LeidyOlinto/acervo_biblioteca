"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
// src/models/Livro.ts
const publicacao_1 = require("./publicacao");
class Livro extends publicacao_1.Publicacao {
    constructor(id, titulo, autor, anoPublicacao, estante, prateleira, editora, isbn) {
        super(id, titulo, autor, anoPublicacao, estante, prateleira, editora);
        this.isbn = isbn;
    }
    getInfo() {
        return `Livro - Título: ${this.titulo}, Autor: ${this.autor}, ISBN: ${this.isbn}, Editora: ${this.editora}`;
    }
}
exports.Livro = Livro;
