import Cliente from "../database/models/Cliente";

export interface CreateCliente {
	nome: string;
	email: string;
}

export interface PaginateClientes {
	from: number;
	to: number;
	per_page: number;
	total: number;
	current_page: number;
	prev_page: number | null;
	next_page: number | null;
	data: Cliente[];
}
