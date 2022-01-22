import Cliente from "../database/models/Cliente";
import { PedidoProduto } from "./Produtos";

export interface IPedido {
	id: number;
	cliente: Cliente;
	updatedAt: Date;
	createdAt: Date;
}

export interface PedidoCreate {
	clienteId: number,
	produtos: PedidoProduto[],
}
