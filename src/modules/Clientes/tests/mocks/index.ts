import Cliente from "../../../../database/models/Cliente";

export const mockCreateClient = {
	nome: 'Lucas Moraes',
	email: 'lucmoraes27@hotmail.com',
};

export const mockClientList = {
	from: 1,
	to: 1,
	per_page: 1,
	total: 1,
	current_page: 1,
	prev_page: null,
	next_page: 2,
	data: [{
		email: 'lucmoraes27@hotmail.com',
		id: 1,
		nome: 'Lucas Moraes',
		updatedAt: new Date(2021,1,20),
		createdAt: new Date(2021,1,20),
	} as Cliente],
}

export const mockUpdateCliente = {
	email: 'lucmoraes27@hotmail.com',
	id: 1,
	nome: 'Lucas Moraes de Carvalho',
	updatedAt: new Date(2021,1,20),
	createdAt: new Date(2021,1,20),
}
