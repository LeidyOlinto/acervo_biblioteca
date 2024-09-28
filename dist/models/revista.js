"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Revista = void 0;
// src/models/Revista.ts
const publicacao_1 = require("./publicacao");
class Revista extends publicacao_1.Publicacao {
    constructor(id, titulo, autor, anoPublicacao, estante, prateleira, editora, numero) {
        super(id, titulo, autor, anoPublicacao, estante, prateleira, editora);
        this.numero = numero;
    }
    getInfo() {
        return `Revista - Título: ${this.titulo}, Autor: ${this.autor}, Número: ${this.numero}, Editora: ${this.editora}`;
    }
}
exports.Revista = Revista;
