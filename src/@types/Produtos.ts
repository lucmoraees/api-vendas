export interface CreateProduto {
	nome: string;
	valor: number;
	quantidade: number;
}

export interface PedidoProdutById {
	id: number;
	quantidade: number;	
}

export interface PedidoProduto {
	id: number;
	quantidade: number;	
}

export interface FindProdutos {
	id: number;
}
