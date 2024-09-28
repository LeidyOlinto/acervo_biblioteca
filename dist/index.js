"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const bilioteca_1 = require("./models/bilioteca");
const livro_1 = require("./models/livro");
const revista_1 = require("./models/revista");
const cd_1 = require("./models/cd");
const dvd_1 = require("./models/dvd");
// Instanciar a biblioteca
const biblioteca = new bilioteca_1.Biblioteca();
// Criar e registrar um livro
const livro = new livro_1.Livro(0, // ID será atribuído pela biblioteca
'O Senhor dos Anéis', 'J.R.R. Tolkien', 1954, 'A1', 'P1', 'Allen & Unwin', '978-0544003415');
biblioteca.registrarItem(livro);
// Criar e registrar uma revista
const revista = new revista_1.Revista(0, 'National Geographic', 'Various', 2023, 'B2', 'P3', 'National Geographic Partners', 150);
biblioteca.registrarItem(revista);
// Criar e registrar um CD
const cd = new cd_1.CD(0, 'Thriller', 'Michael Jackson', 1982, 'C3', 'P2', 42, 'Pop');
biblioteca.registrarItem(cd);
// Criar e registrar um DVD
const dvd = new dvd_1.DVD(0, 'Inception', 'Christopher Nolan', 2010, 'D4', 'P5', 148, 'PG-13');
biblioteca.registrarItem(dvd);
// Listar todos os itens
console.log('Acervo da Biblioteca:');
biblioteca.listarItens().forEach(item => {
    console.log(item.getInfo(), item.getLocalizacao(), `Disponível: ${item.disponibilidade}`);
});
