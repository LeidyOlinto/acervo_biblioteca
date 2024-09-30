import { Publicacao } from "./publicacao";

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

  getInfo() {
    return `Livro - Título: ${this.titulo}, Autor: ${this.autor}, ISBN: ${this.isbn}, Editora: ${this.editora}`;
  }
}
