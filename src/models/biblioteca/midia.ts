// src/models/Midia.ts
import { ItemAcervo } from './itemAcervo';

export abstract class Midia extends ItemAcervo {
    duracao: number; // Duração em minutos

    constructor(
        id: number,
        titulo: string,
        autor: string,
        anoPublicacao: number,
        estante: string,
        prateleira: string,
        duracao: number
    ) {
        super(id, titulo, autor, anoPublicacao, estante, prateleira);
        this.duracao = duracao;
    }

    abstract getInfo(): string;
}
