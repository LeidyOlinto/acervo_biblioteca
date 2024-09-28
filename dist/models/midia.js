"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Midia = void 0;
// src/models/Midia.ts
const itemAcervo_1 = require("./itemAcervo");
class Midia extends itemAcervo_1.ItemAcervo {
    constructor(id, titulo, autor, anoPublicacao, estante, prateleira, duracao) {
        super(id, titulo, autor, anoPublicacao, estante, prateleira);
        this.duracao = duracao;
    }
}
exports.Midia = Midia;
