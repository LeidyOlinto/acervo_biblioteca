import { ItemAcervo } from './itemAcervo';

export class Biblioteca {
   
    private acervo: ItemAcervo[] = [];
    private nextId: number = 1;
   
   
    // Função Genérica para Registrar Itens
    registrarItem<T extends ItemAcervo>(item: T): void {
        item.id = this.nextId++;
        this.acervo.push(item);
    }

    // Listar todos os itens
    listarItens(): ItemAcervo[] {
        return this.acervo;
    }

    // Buscar item por ID
    buscarItemPorId(id: number): ItemAcervo | undefined {
        return this.acervo.find(item => item.id === id);
    }

    // Atualizar informações do item
    atualizarItem(id: number, dadosAtualizados: Partial<ItemAcervo>): boolean {
        const item = this.buscarItemPorId(id);
        if (item) {
            Object.assign(item, dadosAtualizados);
            return true;
        }
        return false;
    }

    // Remover item do acervo
    removerItem(id: number): boolean {
        const itemIndex = this.acervo.findIndex(item => item.id === id);
        if (itemIndex !== -1) {
            const item = this.acervo[itemIndex];
            // Verificar se há empréstimos ativos (Implementar lógica de empréstimos)
            const temEmprestimosAtivos = false; // Placeholder
            if (!temEmprestimosAtivos) {
                this.acervo.splice(itemIndex, 1);
                return true;
            }
        }
        return false;
    }

    // Verificar disponibilidade do item
    verificarDisponibilidade(id: number): boolean | undefined {
        const item = this.buscarItemPorId(id);
        return item?.disponibilidade;
    }

    // Atualizar disponibilidade do item
    atualizarDisponibilidade(id: number, disponibilidade: boolean): boolean {
        const item = this.buscarItemPorId(id);
        if (item) {
            item.disponibilidade = disponibilidade;
            return true;
        }
        return false;
    }
}
