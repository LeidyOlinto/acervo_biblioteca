// src/index.ts
import { Biblioteca } from "./models/biblioteca/biblioteca";
import { Livro } from "./models/biblioteca/livro";
import { Revista } from "./models/biblioteca/revista";
import { CD } from "./models/biblioteca/cd";
import { DVD } from "./models/biblioteca/dvd";

// Instanciar a biblioteca
const biblioteca = new Biblioteca();

// Criar e registrar um livro
// const livro = new Livro(
//   0, // ID será atribuído pela biblioteca
//   "O Senhor dos Anéis",
//   "J.R.R. Tolkien",
//   1954,
//   "A1",
//   "P1",
//   "Allen & Unwin",
//   "978-0544003415"
// );
// biblioteca.registrarItem(livro);

// Criar e registrar uma revista
const revista = new Revista(
  0,
  "National Geographic",
  "Various",
  2023,
  "B2",
  "P3",
  "National Geographic Partners",
  150
);

biblioteca.registrarItem(revista);
// Criar e registrar um CD
const cd = new CD(
  0,
  "Thriller",
  "Michael Jackson",
  1982,
  "C3",
  "P2",
  42,
  "Pop"
);

// Criar e registrar um DVD
const dvd = new DVD(
  0,
  "Inception",
  "Christopher Nolan",
  2010,
  "D4",
  "P5",
  148,
  "PG-13"
);
// Listar todos os itens
biblioteca.listarItens();
