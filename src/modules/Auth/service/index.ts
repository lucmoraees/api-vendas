import { compare, hash } from 'bcryptjs';
import moment from 'moment';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../../../database/repositories/UsersRepository';
import ExceptionError from '../../../errors/exceptionError';
import { createTokenJwt, hashPassword } from '../../../utils';
import { userWithouPassword } from '../../../views/users';
import { Auth } from '../../../@types';
import UsersTokensRepository from '../../../database/repositories/UsersTokensRepository';
import userService from '../../Users/service';
import User from '../../../database/models/User';
import { sendEmail } from '../../../emails';

const login = async (email: string, password: string): Promise<Auth>  => {
	const userRepository = getCustomRepository(UsersRepository);

	const user = await userRepository.findByEmail(email);

	if (!user) {
		throw new ExceptionError('Email ou senha incorretos');
	}

	const isValid = await compare(password, user.password);

	if (!isValid) {
		throw new ExceptionError('Email ou senha incorretos');
	}

	const userWhitoutPassword = userWithouPassword(user);

	const tokenAuth = createTokenJwt(userWhitoutPassword);

	return { tokenAuth };
}

const forgotPassword = async (email: string) => {
	const userRepository = getCustomRepository(UsersRepository);
	const userTokenRepository = getCustomRepository(UsersTokensRepository);

	const user = await userRepository.findByEmail(email);

	if (!user) {
		throw new ExceptionError('Email inválido');
	}

	const userToken = await userTokenRepository.generateToken(user.id);

	await sendEmail({
		to: email,
		subject: 'Token para redefinição da senha',
		nameTemplate: 'reset-password',
		variaveis: { token: userToken.token, nome: user.nome },
	});
}

const resetPassword = async (token: string, password: string): Promise<User> => {
	const userRepository = getCustomRepository(UsersRepository);
	const userTokenRepository = getCustomRepository(UsersTokensRepository);

	const userToken = await userTokenRepository.findByToken(token);

	if (!userToken) {
		throw new ExceptionError('Token inexistente');
	}

	const user = await userRepository.findById(userToken.usersId);

	if (!user) {
		throw new ExceptionError('Email inválido');
	}

	const tokenCreatedAt = userToken.createdAt;
	const expiracao = moment(tokenCreatedAt).add(2, 'hours');

	if (moment().isAfter(expiracao)) {
		throw new ExceptionError('Token expirado');
	}

	const passwordHashed = await hashPassword(password);

	const updated = await userService.updateUser(user.id, { password: passwordHashed });

	return updated;
}

export default {
	login,
	forgotPassword,
	resetPassword,
}
