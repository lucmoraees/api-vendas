import service from '../service';
import { Request, Response } from 'express';
import { userWithouPassword } from '../../../views/users';

const create = async (req: Request, res: Response): Promise<Response> => {
	try {
		const params = req.body;

		const newUser = await service.create(params);

		return res.json(userWithouPassword(newUser));
	} catch (error) {
		return res.status(400).json(error);
	}
}

const getList = async (req: Request, res: Response): Promise<Response> => {
	try {
		const users = await service.getList();

		return res.json(users);		
	} catch (error) {
		return res.status(400).json(error);
	}
}

const getUserById = async (req: Request, res: Response): Promise<Response> => {
	try {
		const { id } = req.params;

		const user = await service.getUserById(Number(id));

		return res.json(userWithouPassword(user));
	} catch (error) {
		return res.status(400).json(error);
	}
}

const updateUser = async (req: Request, res: Response): Promise<Response> => {
	try {
		const { id } = req.user;
		const params = req.body;

		const update = await service.updateUser(id, params);

		return res.json(userWithouPassword(update));		
	} catch (error) {
		return res.status(400).json(error);
	}
}

const updateUserAvatar = async (req: Request, res: Response): Promise<Response> => {
	try {
		const { id } = req.user;

		const update = await service.updateUserAvatar(id, req.file.filename);

		return res.json(userWithouPassword(update));		
	} catch (error) {
		return res.status(400).json(error);
	}
}

const changePassword = async (req: Request, res: Response): Promise<Response> => {
	try {
		const { id } = req.user;
		const { oldPassword, newPassword } = req.body;

		await service.changePassword(id, oldPassword, newPassword);

		return res.json({ message: 'Senha alterada!' });
	} catch (error) {
		return res.status(400).json(error);
	}
}

export default {
	create,
	getList,
	getUserById,
	updateUser,
	updateUserAvatar,
	changePassword,
}
