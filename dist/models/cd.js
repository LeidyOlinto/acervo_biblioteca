"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CD = void 0;
// src/models/CD.ts
const midia_1 = require("./midia");
class CD extends midia_1.Midia {
    constructor(id, titulo, autor, anoPublicacao, estante, prateleira, duracao, genero) {
        super(id, titulo, autor, anoPublicacao, estante, prateleira, duracao);
        this.genero = genero;
    }
    getInfo() {
        return `CD - Título: ${this.titulo}, Artista: ${this.autor}, Duração: ${this.duracao} minutos, Gênero: ${this.genero}`;
    }
}
exports.CD = CD;
