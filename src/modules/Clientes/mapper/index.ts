import { getRepository, getManager } from 'typeorm';
import { CreateCliente, ObjectGeneric, PaginateClientes } from '../../../@types';
import Cliente from '../../../database/models/Cliente';

const create = async (data: CreateCliente): Promise<Cliente> => {	
	const usersRepository = getRepository(Cliente);

	const novoCliente = usersRepository.create(data);

	await usersRepository.save(novoCliente);

	return novoCliente;
}

const getList = async (): Promise<PaginateClientes> => {
	const clientesRepository = getRepository(Cliente);

	const clientes = await clientesRepository.createQueryBuilder().paginate();

	return clientes as PaginateClientes;
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
