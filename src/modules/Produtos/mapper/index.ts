import { getRepository, getManager } from 'typeorm';
import { CreateProduto, ObjectGeneric } from '../../../@types';
import Produto from '../../../database/models/Produto';

const create = async (data: CreateProduto): Promise<Produto> => {
	const produtosRepository = getRepository(Produto);

	const novoProduto = produtosRepository.create(data);

	await produtosRepository.save(novoProduto);

	return novoProduto;
}

const getList = async (): Promise<Produto[]> => {
	const produtosRepository = getRepository(Produto);

	const produtos = produtosRepository.find();

	return produtos;
}

const getProdutoById = async (id: number): Promise<Produto> => {
	const produtosRepository = getRepository(Produto);

	const produto = produtosRepository.findOne({ where: { id } });

	return produto;
}

const updateProduto = async (id: number, data: ObjectGeneric): Promise<void> => {
 	getManager()
		.transaction(async (transaction) => {
			await transaction
				.createQueryBuilder()
				.update(Produto)
				.set(data)
				.where('id = :id', { id })
				.execute();
		});
	} 

const deleteProduto = async (id: number): Promise<void> => {
	getManager()
		.transaction(async (transaction) => {
			await transaction
				.createQueryBuilder()
				.delete()
				.from(Produto)
				.where('id = :id', { id })
				.execute();
		});
	} 

export default {
	create,
	getList,
	getProdutoById,
	updateProduto,
	deleteProduto,
}
