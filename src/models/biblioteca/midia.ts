import { ItemAcervo } from "./itemAcervo";

export abstract class Midia extends ItemAcervo {
  duracao: number;

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
}
