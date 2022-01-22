import { CreateCliente, ObjectGeneric } from '../../../../@types';
import ExceptionError from '../../../../errors/exceptionError';
import mapper from '../mapper';

const create = async (data: CreateCliente) => {
	const clienteExists = await mapper.findByEmail(data.email);

	if (clienteExists) {
		throw new ExceptionError('Este email já está sendo utilizado!');
	}

	const cliente = mapper.create(data); 

	return cliente;
}

const getClienteById = async (id: number) => {
	const cliente = mapper.getClienteById(id);

	return cliente;
}

const getList = async () => {
	const clientes = await mapper.getList();

	return clientes;
}

const updateCliente = async (id: number, data: ObjectGeneric) => {
	const cliente = await mapper.getClienteById(id);

	if (!cliente) {
		throw new ExceptionError('Cliente não encontrado');
	}

	await mapper.updateCliente(id, data);

	const updated = { ...cliente, ...data };

	return updated;
}

const deleteCliente = async (id: number) => {
	const cliente = await mapper.getClienteById(id);

	if (!cliente) {
		throw new ExceptionError('Cliente não encontrado');
	}

	await mapper.deleteCliente(id);
}

export default {
	create,
	getClienteById,
	getList,
	updateCliente,
	deleteCliente,
};
