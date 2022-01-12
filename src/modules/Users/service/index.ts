import path from 'path';
import fs from 'fs';
import { getCustomRepository } from 'typeorm';
import { instanceToInstance } from 'class-transformer';
import { CreateUser, ObjectGeneric } from '../../../@types';
import User from '../../../database/models/User';
import UsersRepository from '../../../database/repositories/UsersRepository';
import ExceptionError from '../../../errors/exceptionError';
import { hashPassword } from '../../../utils';
import mapper from '../mapper';
import uploadConfigs from '../../../configs/upload';
import { compare } from 'bcryptjs';

const create = async (data: CreateUser): Promise<User> => {
	const userRepository = getCustomRepository(UsersRepository);

	const userExists = await userRepository.findByEmail(data.email);

	if (userExists) {
		throw new ExceptionError('Este email já está sendo utilizado!');
	}

	const hashed = await hashPassword(data.password);

	const newData = { ...data, password: hashed};

	const newUser = mapper.create(newData);

	return newUser;
}

const getUserById = async (id: number): Promise<User> => {
	const userRepository = getCustomRepository(UsersRepository);

	const user = await userRepository.findById(id);

	if (!user) {
		throw new ExceptionError('Usuário não encontrado');
	}

	return user;
}

const getList = async (): Promise<User[]> => {
	const users = await mapper.getList();

	return users;
}

const updateUser = async (id: number, data: ObjectGeneric): Promise<User> => {
	const userRepository = getCustomRepository(UsersRepository);

	const user = await userRepository.findById(id);

	if (!user) {
		throw new ExceptionError('Usuário não encontrado');
	}

	await mapper.updateUser(id, data);

	const updated = await mapper.getUserByQuery({ id });

	return updated;
}

const updateUserAvatar = async (id: number, fileName: string): Promise<User> => {	
	const userRepository = getCustomRepository(UsersRepository);

	const user = await userRepository.findById(id);

	if (!user) {
		throw new ExceptionError('Usuário não encontrado');
	}

	if (user.avatar) {
		const filePath = path.join(uploadConfigs.directory, user.avatar);
		const fileExists = fs.statSync(filePath);

		if (fileExists) {
			fs.unlinkSync(filePath);
		}
	}

	await mapper.updateUser(id, { avatar: fileName });

	const updated = await mapper.getUserByQuery({ id });

	return updated;
}

const changePassword = async (id: number, oldPassword: string, newPassword: string): Promise<void> => {
	const userRepository = getCustomRepository(UsersRepository);

	const user = await userRepository.findById(id);

	if (!user) {
		throw new ExceptionError('Usuário não encontrado');
	}

	const isValidPassword = await compare(
		oldPassword,
		user.password,
	);

	if (!isValidPassword) {
		throw new ExceptionError('Senha incorreta!');
	}

	const passwordHashed = await hashPassword(newPassword);

	await mapper.updateUser(id, { password: passwordHashed });
}

export default {
	create,
	getList,
	getUserById,
	updateUser,
	updateUserAvatar,
	changePassword,
}
