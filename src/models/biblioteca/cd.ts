import { Midia } from "./midia";

export class CD extends Midia {
  genero: string;

  constructor(
    id: number,
    titulo: string,
    autor: string,
    anoPublicacao: number,
    estante: string,
    prateleira: string,
    duracao: number,
    genero: string
  ) {
    super(id, titulo, autor, anoPublicacao, estante, prateleira, duracao);
    this.genero = genero;
  }

  getInfo() {
    return `CD - Título: ${this.titulo}, Artista: ${this.autor}, Duração: ${this.duracao} minutos, Gênero: ${this.genero}`;
  }
}
