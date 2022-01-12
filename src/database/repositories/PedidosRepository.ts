import { EntityRepository, Repository } from 'typeorm';
import Cliente from '../models/Cliente';
import Pedido from '../models/Pedido';

interface PedidoCreate {
	cliente: Cliente,
	produtos: PedidoProduto[],
}

interface PedidoProduto {
	valor: number;
	quantidade: number;	
}

@EntityRepository(Pedido)
class PedidosRepository extends Repository<Pedido> {

	public async findById(id: number): Promise<Pedido | undefined> {
		const pedido = this.findOne(id, { relations: ['cliente', 'pedidoCompra'] });

		return pedido;
	}

	public async createPedido({ cliente, produtos }: PedidoCreate): Promise<Pedido | undefined> {
		console.log(produtos);

		const pedido = this.create({
			cliente,
			pedidoCompra: produtos,
		});



		await this.save(pedido);

		return pedido;
	}
}

export default PedidosRepository;
