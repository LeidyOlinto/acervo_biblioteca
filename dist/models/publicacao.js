"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Publicacao = void 0;
const itemAcervo_1 = require("./itemAcervo");
class Publicacao extends itemAcervo_1.ItemAcervo {
    constructor(id, titulo, autor, anoPublicacao, estante, prateleira, editora) {
        super(id, titulo, autor, anoPublicacao, estante, prateleira);
        this.editora = editora;
    }
}
exports.Publicacao = Publicacao;
