// src/models/Livro.ts
import { Publicacao } from './publicacao';

export class Livro extends Publicacao {
    isbn: string;

    constructor(
        id: number,
        titulo: string,
        autor: string,
        anoPublicacao: number,
        estante: string,
        prateleira: string,
        editora: string,
        isbn: string
    ) {
        super(id, titulo, autor, anoPublicacao, estante, prateleira, editora);
        this.isbn = isbn;
    }

    getInfo(): string {
        return `Livro - Título: ${this.titulo}, Autor: ${this.autor}, ISBN: ${this.isbn}, Editora: ${this.editora}`;
    }
}
