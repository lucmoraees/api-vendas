import { Request, Response } from 'express';
import service from '../service';

const login = async (req: Request, res: Response): Promise<Response> => {
	try {
		const { email, password } = req.body;

		const authentication = await service.login(email, password);

		return res.json(authentication);
	} catch (error) {
		return res.status(400).json(error);
	}
}

const forgotPassword = async (req: Request, res: Response): Promise<Response> => {
	try {
		const { email } = req.body;

		await service.forgotPassword(email);

		return res.json({ mesage: 'Email enviado' });
	} catch (error) {
		return res.status(400).json(error);
	}
}

const resetPassword = async (req: Request, res: Response): Promise<Response> => {
	try {
		const { token, password } = req.body;
		
		const user = await service.resetPassword(token, password);

		return res.json(user);
	} catch (error) {
		return res.status(400).json(error);
	}
}

export default {
	login,
	forgotPassword,
	resetPassword,
}
