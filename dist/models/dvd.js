"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DVD = void 0;
// src/models/DVD.ts
const midia_1 = require("./midia");
class DVD extends midia_1.Midia {
    constructor(id, titulo, autor, anoPublicacao, estante, prateleira, duracao, classificacao) {
        super(id, titulo, autor, anoPublicacao, estante, prateleira, duracao);
        this.classificacao = classificacao;
    }
    getInfo() {
        return `DVD - Título: ${this.titulo}, Diretor: ${this.autor}, Duração: ${this.duracao} minutos, Classificação: ${this.classificacao}`;
    }
}
exports.DVD = DVD;
