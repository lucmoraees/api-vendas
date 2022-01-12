import { getCustomRepository } from "typeorm"
import Pedido from "../../../database/models/Pedido";
import CustomPedidoRepository from '../../../database/repositories/PedidosRepository';

const getPedidoById = async (id: number): Promise<Pedido> => {
	const pedidosRepository = getCustomRepository(CustomPedidoRepository);

	const pedido = await pedidosRepository.findById(id);

	return pedido;
}

export default {
	getPedidoById,
}
