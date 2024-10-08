import { ItemAcervo } from "./itemAcervo";

export class Biblioteca {
  private acervo: ItemAcervo[] = [];
  private nextId = 1;

  // Função Genérica para Registrar Itens
  registrarItem<T extends ItemAcervo>(item: T) {
    item.id = this.nextId++;
    this.acervo.push(item);
  }

  // Listar todos os itens
  listarItens() {
    return this.acervo.forEach((item) => console.log(item));
  }

  // Buscar item por ID
  buscarItemPorId(id: number) {
    return this.acervo.find((item) => item.id === id);
  }

  // Atualizar informações do item
  atualizarItem(id: number, dadosAtualizados: Partial<ItemAcervo>) {
    const item = this.buscarItemPorId(id);
    if (item) {
      Object.assign(item, dadosAtualizados);
      console.log(item);
      return true;
    }
    return false;
  }

  // Remover item do acervo
  removerItem(id: number) {
    const itemIndex = this.acervo.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      return this.acervo?.splice(itemIndex, 1);
    }

    console.log("Item não encontrado");
  }

  // Verificar disponibilidade do item
  verificarDisponibilidade(id: number) {
    const item = this.buscarItemPorId(id);
    return item?.disponibilidade;
  }

  // Atualizar disponibilidade do item
  atualizarDisponibilidade(id: number, disponibilidade: boolean) {
    const item = this.buscarItemPorId(id);
    if (item) {
      item.disponibilidade = disponibilidade;
      console.log(item.disponibilidade);
      return true;
    }
    return false;
  }
}
