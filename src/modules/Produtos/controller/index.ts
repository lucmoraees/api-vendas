import service from '../service';
import { Request, Response } from 'express';

const create = async (req: Request, res: Response): Promise<Response> => {
	try {
		const params = req.body;

		const novoProduto = await service.create(params);

		return res.json(novoProduto);
	} catch (error) {
		return res.status(400).json(error);
	}
}

const getList = async (req: Request, res: Response): Promise<Response> => {
	try {
		const produtos = await service.getList();

		return res.json(produtos);		
	} catch (error) {
		return res.status(400).json(error);
	}
}

const getProdutoById = async (req: Request, res: Response): Promise<Response> => {
	try {
		const { id } = req.params;

		const produto = await service.getProdutoById(Number(id));

		return res.json(produto);
	} catch (error) {
		return res.status(400).json(error);
	}
}

const updateProduto = async (req: Request, res: Response): Promise<Response> => {
	try {
		const { id } = req.params;
		const params = req.body;

		const update = await service.updateProduto(Number(id), params);

		return res.json(update);		
	} catch (error) {
		return res.status(400).json(error);
	}
}

const deleteProduto = async (req: Request, res: Response): Promise<Response> => {
	try {
		const { id } = req.params;
		
		await service.deleteProduto(Number(id));
		
		return res.json({ message: 'Produto deletado' });
	} catch (error) {
		return res.status(400).json(error)
	}
}

export default {
	create,
	getList,
	getProdutoById,
	updateProduto,
	deleteProduto,
}
