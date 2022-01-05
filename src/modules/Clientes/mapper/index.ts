import { getRepository, getManager } from 'typeorm';
import { CreateCliente, ObjectGeneric } from '../../../@types';
import Cliente from '../../../database/models/Cliente';

const create = async (data: CreateCliente): Promise<Cliente> => {	
	const usersRepository = getRepository(Cliente);

	const novoCliente = usersRepository.create(data);

	await usersRepository.save(novoCliente);

	return novoCliente;
}

const getList = async (): Promise<Cliente[]> => {
	const clientesRepository = getRepository(Cliente);

	const clientes = clientesRepository.find();

	return clientes;
}

const updateCliente = async (id: number, data: ObjectGeneric): Promise<void> => {
 	getManager()
		.transaction(async (transaction) => {
			await transaction
				.createQueryBuilder()
				.update(Cliente)
				.set(data)
				.where('id = :id', { id })
				.execute();
		});
	}

const deleteCliente = async (id: number): Promise<void> => {
	getManager()
	 .transaction(async (transaction) => {
		 await transaction
			 .createQueryBuilder()
			 .delete()
			 .from(Cliente)
			 .where('id = :id', { id })
			 .execute();
	 });
 }

export default {
	create,
	getList,
	updateCliente,
	deleteCliente,
}
