import { CreateCliente, ObjectGeneric } from '../../../../@types';
import Cliente from '../../../../database/models/Cliente';

let clientes: Cliente[] = [];

const create = async (data: CreateCliente) => {
	const cliente = new Cliente();

	cliente.id = 1;
	cliente.email = data.email;
	cliente.nome = data.nome;
	cliente.updatedAt = new Date(2021,1,20);
	cliente.createdAt = new Date(2021,1,20);

	clientes.push(cliente);

	return cliente;
}

const findByEmail = async (email: string) => {
	const cliente = clientes.find(cliente => cliente.email === email)

	return cliente;
}

const getClienteById = async (id: number) => {
	const cliente = clientes.find(cliente => cliente.id === id)

	return cliente;
}

const getList = async () => {
	const list = {
		from: 1,
		to: 1,
		per_page: clientes.length,
		total: clientes.length,
		current_page: 1,
		prev_page: null,
		next_page: 2,
		data: clientes,
	}

	return list;
}

const updateCliente = async (id: number, data: ObjectGeneric) => {
	clientes.map(cliente => {
		if (cliente.id === id) {
			cliente.nome = String(data.nome)
		}
	})
}

const deleteCliente = async (id: number) => {
	const clientesUpdated = clientes.filter(cliente => cliente.id !== id)

	clientes = clientesUpdated;
}

export default {
	create,
	getClienteById,
	findByEmail,
	getList,
	updateCliente,
	deleteCliente,
};
