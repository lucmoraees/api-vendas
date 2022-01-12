import { PedidoProduto } from "./Produtos";

export interface PedidoCreate {
	clienteId: number,
	produtos: PedidoProduto[],
}
