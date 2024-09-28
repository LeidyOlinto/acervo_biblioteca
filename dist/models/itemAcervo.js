"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemAcervo = void 0;
class ItemAcervo {
    constructor(id, titulo, autor, anoPublicacao, estante, prateleira) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.estante = estante;
        this.prateleira = prateleira;
        this.disponibilidade = true; // Disponível por padrão
    }
    getLocalizacao() {
        return `Estante: ${this.estante}, Prateleira: ${this.prateleira}`;
    }
}
exports.ItemAcervo = ItemAcervo;
