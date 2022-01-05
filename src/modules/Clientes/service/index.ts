import { getCustomRepository } from 'typeorm';
import { CreateCliente, ObjectGeneric } from '../../../@types';
import Cliente from '../../../database/models/Cliente';
import ClientesRepository from '../../../database/repositories/ClientesRepository';
import ExceptionError from '../../../errors/exceptionError';
import mapper from '../mapper';

const create = async (data: CreateCliente): Promise<Cliente> => {
	const clienteRepository = getCustomRepository(ClientesRepository);

	const clienteExists = await clienteRepository.findByEmail(data.email);

	if (clienteExists) {
		throw new ExceptionError('Este email já está sendo utilizado!');
	}

	const newCliente = mapper.create(data);

	return newCliente;
}

const getClienteById = async (id: number): Promise<Cliente> => {
	const clienteRepository = getCustomRepository(ClientesRepository);

	const cliente = await clienteRepository.findById(id);

	if (!cliente) {
		throw new ExceptionError('Cliente não encontrado');
	}

	return cliente;
}

const getList = async (): Promise<Cliente[]> => {
	const clientes = await mapper.getList();

	return clientes;
}

const updateCliente = async (id: number, data: ObjectGeneric): Promise<Cliente> => {
	const clienteRepository = getCustomRepository(ClientesRepository);

	const cliente = await clienteRepository.findById(id);

	if (!cliente) {
		throw new ExceptionError('Cliente não encontrado');
	}

	await mapper.updateCliente(id, data);

	const updated = { ...cliente, ...data }

	return updated;
}

const deleteCliente = async (id: number): Promise<void> => {
	const clienteRepository = getCustomRepository(ClientesRepository);

	const cliente = await clienteRepository.findById(id);

	if (!cliente) {
		throw new ExceptionError('Cliente não encontrado');
	}

	await mapper.deleteCliente(id);
}

export default {
	create,
	getList,
	getClienteById,
	updateCliente,
	deleteCliente,
}
