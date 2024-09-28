"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
class Biblioteca {
    constructor() {
        this.acervo = [];
        this.nextId = 1;
    }
    // Função Genérica para Registrar Itens
    registrarItem(item) {
        item.id = this.nextId++;
        this.acervo.push(item);
    }
    // Listar todos os itens
    listarItens() {
        return this.acervo;
    }
    // Buscar item por ID
    buscarItemPorId(id) {
        return this.acervo.find(item => item.id === id);
    }
    // Atualizar informações do item
    atualizarItem(id, dadosAtualizados) {
        const item = this.buscarItemPorId(id);
        if (item) {
            Object.assign(item, dadosAtualizados);
            return true;
        }
        return false;
    }
    // Remover item do acervo
    removerItem(id) {
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
    verificarDisponibilidade(id) {
        const item = this.buscarItemPorId(id);
        return item === null || item === void 0 ? void 0 : item.disponibilidade;
    }
    // Atualizar disponibilidade do item
    atualizarDisponibilidade(id, disponibilidade) {
        const item = this.buscarItemPorId(id);
        if (item) {
            item.disponibilidade = disponibilidade;
            return true;
        }
        return false;
    }
}
exports.Biblioteca = Biblioteca;
