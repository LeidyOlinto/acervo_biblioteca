export interface Localizavel {
  estante: string;
  prateleira: string;
  getLocalizacao(): string;
}