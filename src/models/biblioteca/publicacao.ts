import { ItemAcervo } from './itemAcervo';

export abstract class Publicacao extends ItemAcervo {
    editora: string;

    constructor(
        id: number,
        titulo: string,
        autor: string,
        anoPublicacao: number,
        estante: string,
        prateleira: string,
        editora: string
    ) {
        super(id, titulo, autor, anoPublicacao, estante, prateleira);
        this.editora = editora;
    }

    abstract getInfo(): string;
}