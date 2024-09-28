import { Localizavel } from './localizavel';

export abstract class ItemAcervo implements Localizavel {
    id: number;
    titulo: string;
    autor: string;
    anoPublicacao: number;
    estante: string;
    prateleira: string;
    disponibilidade: boolean;

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
        this.disponibilidade = true; // Disponível por padrão
    }

    getLocalizacao(): string {
        return `Estante: ${this.estante}, Prateleira: ${this.prateleira}`;
    }

    abstract getInfo(): string;
}