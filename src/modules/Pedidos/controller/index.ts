import { Request, Response } from 'express';
import service from '../service';

const create = async (req: Request, res: Response): Promise<Response> => {
	try {
		const pedido = await service.create(req.body);
		
		return res.json(pedido);
	} catch (error) {
		return res.status(400).json(error);
	}
}

const getPedido = async (req: Request, res: Response): Promise<Response> => {
	try {
		const { id } = req.params;
		
		const pedido = await service.getPedido(Number(id));

		return res.json(pedido);
	} catch (error) {
		return res.status(400).json(error);
	}
}

export default {
	create,
	getPedido,
}
