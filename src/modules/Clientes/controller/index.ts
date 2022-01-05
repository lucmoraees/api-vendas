import service from '../service';
import { Request, Response } from 'express';

const create = async (req: Request, res: Response): Promise<Response> => {
	try {
		const params = req.body;

		const newCliente = await service.create(params);

		return res.json(newCliente);
	} catch (error) {
		return res.status(400).json(error);
	}
}

const getList = async (req: Request, res: Response): Promise<Response> => {
	try {
		const clientes = await service.getList();

		return res.json(clientes);		
	} catch (error) {
		return res.status(400).json(error);
	}
}

const getClienteById = async (req: Request, res: Response): Promise<Response> => {
	try {
		const { id } = req.params;

		const cliente = await service.getClienteById(Number(id));

		return res.json(cliente);
	} catch (error) {
		return res.status(400).json(error);
	}
}

const updateCliente = async (req: Request, res: Response): Promise<Response> => {
	try {
		const { id } = req.params;
		const params = req.body;

		const update = await service.updateCliente(Number(id), params);

		return res.json(update);		
	} catch (error) {
		return res.status(400).json(error);
	}
}

const deleteCliente = async (req: Request, res: Response): Promise<Response> => {
	try {
		const { id } = req.params;

		await service.deleteCliente(Number(id));

		return res.status(204).json();		
	} catch (error) {
		return res.status(400).json(error);
	}
}

export default {
	create,
	getList,
	getClienteById,
	updateCliente,
	deleteCliente,
}
