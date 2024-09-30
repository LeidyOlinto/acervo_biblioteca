📚 Biblioteca Online com TypeScript

Descrição
O Biblioteca Online com TypeScript é uma aplicação web que simula o sistema de gerenciamento de uma biblioteca, com o objetivo de organizar e controlar um acervo digital. A aplicação foi desenvolvida utilizando TypeScript, proporcionando tipagem estática e maior organização do código.

Funcionalidades Principais

1. Gerenciamento do Acervo
   
Cadastro de Itens:

Cadastrar diferentes tipos de itens, como livros, revistas, CDs e DVDs.
Definir informações específicas de cada tipo de item (ex: ISBN para livros, editora para revistas, duração para mídias).
Controlar a localização física dos itens na biblioteca (ex: estante, prateleira).

Edição de Itens:

Atualizar as informações dos itens cadastrados.

Remoção de Itens:

Remover itens do sistema, com verificação de empréstimos ativos.

Controle de Disponibilidade:

Visualizar se os itens estão disponíveis ou emprestados.
Estrutura de Classes

Classe Abstrata: ItemAcervo

Define a estrutura base para todos os itens do acervo, sendo a base para os demais tipos de itens.

Classes Concretas:

Livro, Revista, CD, DVD:
Cada uma dessas classes herda de ItemAcervo, com atributos e métodos específicos para cada tipo de item.

Superclasses Intermediárias:

Publicacao (para livros e revistas) e Midia (para CDs e DVDs):
Categorizam os tipos de itens de forma mais específica.
Interface: Localizavel

Implementada por classes que possuem localização física (ex: estante, prateleira).
Funções e Métodos
Função Genérica: registrarItem<T extends ItemAcervo>(item: T)

Permite adicionar qualquer tipo de ItemAcervo ao acervo, garantindo a tipagem correta e a organização dos dados.

Lógica de Negócio:

Implementada para garantir o funcionamento correto do sistema, como validação da disponibilidade de itens antes de qualquer operação.

Tecnologias Utilizadas:

TypeScript: Linguagem principal utilizada no projeto, para garantir a segurança e a escalabilidade do código.
Node.js: Para gerenciamento de pacotes e execução do TypeScript.
Webpack: Para empacotamento e otimização dos arquivos do projeto.
