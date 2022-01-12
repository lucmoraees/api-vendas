import { getCustomRepository } from 'typeorm';
import { PedidoCreate } from '../../../@types';
import serviceCliente from '../../Clientes/service';
import CustomProdutosRepository from '../../../database/repositories/ProdutosRepository';
import CustomPedidosRepository from '../../../database/repositories/PedidosRepository';
import ExceptionError from '../../../errors/exceptionError';
import Pedido from '../../../database/models/Pedido';
import mapper from '../mapper';

const create = async ({ clienteId, produtos }: PedidoCreate): Promise<Pedido> => {
	const pedidosRepository = getCustomRepository(CustomPedidosRepository);
	const produtosRepository = getCustomRepository(CustomProdutosRepository);

	const cliente = await serviceCliente.getClienteById(clienteId);

	const produtosExistentes = await produtosRepository.findAllByIds(produtos);

	if (!produtosExistentes.length) {
		throw new ExceptionError('Não foi possível encontrar os produtos informados');
	}

	const idsProdutosExistentes = produtosExistentes.map(produto => produto.id);

	produtos.map(produto => {
		if (!idsProdutosExistentes.includes(produto.id)) {
			throw new ExceptionError(`Não foi possível encontrar o produto ${produto.id}`);
		}
	});
	
	produtos.map(produto => {
		produtosExistentes.map(produtoExistente => {
			if (produto.quantidade > produtoExistente.quantidade) {
				throw new ExceptionError(`Quantidade insuficiente em estoque do produto ${produtoExistente.nome}`);
			}
		});
	});

	const produtosFormatados = produtos.map(produto => ({
		id: produto.id,
		quantidade: produto.quantidade,
		valor: produtosExistentes.filter(item => item.id === produto.id)[0].valor,
	}));

	const pedido = await pedidosRepository.createPedido({
		cliente,
		produtos: produtosFormatados,
	});

	const updateQuantidadeProduto = produtos.map(
		produto => ({
			id: produto.id,
			quantidade: produtosExistentes.filter(p => p.id === produto.id)[0].quantidade - produto.quantidade,
		})
	)

	await produtosRepository.save(updateQuantidadeProduto);

	return pedido;
}

const getPedido = async (pedidoId: number): Promise<Pedido> => {
	const pedido = mapper.getPedidoById(pedidoId);

	if (!pedido) {
		throw new ExceptionError('Pedido não encontrado');
	}

	return pedido;
}

export default {
	create,
	getPedido,
}
