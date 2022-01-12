import { getRepository, getManager } from 'typeorm';
import { CreateUser, ObjectGeneric } from '../../../@types';
import User from '../../../database/models/User';

const getUserByQuery = async (data: ObjectGeneric): Promise<User> => {	
	const usersRepository = getRepository(User);

	const user = usersRepository.findOne({ where: data });

	return user;
}

const create = async (data: CreateUser): Promise<User> => {	
	const usersRepository = getRepository(User);

	const novoUser = usersRepository.create(data);

	await usersRepository.save(novoUser);

	return novoUser;
}

const getList = async (): Promise<User[]> => {
	const usersRepository = getRepository(User);

	const users = usersRepository.find();

	return users;
}

const updateUser = async (id: number, data: ObjectGeneric): Promise<void> => getManager()
	.transaction(async (transaction) => {
		await transaction
			.createQueryBuilder()
			.update(User)
			.set(data)
			.where('id = :id', { id })
			.execute();
	});

export default {
	getUserByQuery,
	create,
	getList,
	updateUser,
}
