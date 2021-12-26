import { getCustomRepository } from 'typeorm';
import { CreateProduto, ObjectGeneric } from '../../../@types';
import Produto from '../../../database/models/Produto';
import ProdutosRepository from '../../../database/repositories/ProdutosRepository';
import ExceptionError from '../../../errors/exceptionError';
import mapper from '../mapper';

const create = async (data: CreateProduto): Promise<Produto> => {
	const produtoRepository = getCustomRepository(ProdutosRepository);

	const produtoExists = await produtoRepository.findByName(data.nome);

	if (produtoExists) {
		throw new ExceptionError('Já existe um produto com esse nome cadastrado');
	}

	const novoProduto = mapper.create(data);

	return novoProduto;
}

const getProdutoById = async (id: number): Promise<Produto> => {
	const produto = await mapper.getProdutoById(id);

	if (!produto) {
		throw new ExceptionError('Produto não encontrado');
	}

	return produto;
}

const getList = async (): Promise<Produto[]> => {
	const produtos = await mapper.getList();

	return produtos;
}

const updateProduto = async (id: number, data: ObjectGeneric): Promise<Produto> => {
	const produtoRepository = getCustomRepository(ProdutosRepository);

	const produto = await mapper.getProdutoById(id);

	if (!produto) {
		throw new ExceptionError('Produto não encontrado');
	}

	if (data.nome) {
		throw new ExceptionError('Não é possível alterar o nome de um produto cadastrado');
	}

	await mapper.updateProduto(id, data);

	const updated = { ...produto, ...data }

	return updated;
}

const deleteProduto = async (id: number): Promise<void> => {
	const produto = await mapper.getProdutoById(id);

	if (!produto) {
		throw new ExceptionError('Produto não encontrado');
	}

	await mapper.deleteProduto(id);
}

export default {
	create,
	getList,
	getProdutoById,
	updateProduto,
	deleteProduto,
}
