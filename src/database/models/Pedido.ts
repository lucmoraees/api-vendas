import {
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
	CreateDateColumn,
	ManyToOne,
	JoinColumn,
	OneToMany,
} from 'typeorm';
import { IPedido } from '../../@types';
import Cliente from './Cliente';
import PedidoCompra from './PedidoCompra';

@Entity('pedidos')
class Pedido implements IPedido {
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => Cliente)
	@JoinColumn({ name: 'clientes_id' }) 
	cliente: Cliente;

	@OneToMany(() => PedidoCompra, pedidoCompra => pedidoCompra.pedido, { cascade: true })
	pedidoCompra: PedidoCompra[];

	@UpdateDateColumn()
	updatedAt: Date;

	@CreateDateColumn()
	createdAt: Date;
}

export default Pedido;
