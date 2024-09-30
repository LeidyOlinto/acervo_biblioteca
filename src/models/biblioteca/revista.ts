// src/models/Revista.ts
import { Publicacao } from './publicacao';

export class Revista extends Publicacao {
    numero: number;

    constructor(
        id: number,
        titulo: string,
        autor: string,
        anoPublicacao: number,
        estante: string,
        prateleira: string,
        editora: string,
        numero: number
    ) {
        super(id, titulo, autor, anoPublicacao, estante, prateleira, editora);
        this.numero = numero;
    }

    getInfo(): string {
        return `Revista - Título: ${this.titulo}, Autor: ${this.autor}, Número: ${this.numero}, Editora: ${this.editora}`;
    }
}
