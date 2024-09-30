import { ILocalizavel } from "../../types/localizavel";

export abstract class ItemAcervo implements ILocalizavel {
  id: number;
  titulo: string;
  autor: string;
  anoPublicacao: number;
  estante: string;
  prateleira: string;
  disponibilidade = true;

  constructor(
    id: number,
    titulo: string,
    autor: string,
    anoPublicacao: number,
    estante: string,
    prateleira: string
  ) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
    this.estante = estante;
    this.prateleira = prateleira;
  }

  getLocalizacao(): string {
    return `Estante: ${this.estante}, Prateleira: ${this.prateleira}`;
  }

  abstract getInfo(): string;
}
