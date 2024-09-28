// src/models/DVD.ts
import { Midia } from './midia';

export class DVD extends Midia {
    classificacao: string;

    constructor(
        id: number,
        titulo: string,
        autor: string,
        anoPublicacao: number,
        estante: string,
        prateleira: string,
        duracao: number,
        classificacao: string
    ) {
        super(id, titulo, autor, anoPublicacao, estante, prateleira, duracao);
        this.classificacao = classificacao;
    }

    getInfo(): string {
        return `DVD - Título: ${this.titulo}, Diretor: ${this.autor}, Duração: ${this.duracao} minutos, Classificação: ${this.classificacao}`;
    }
}
