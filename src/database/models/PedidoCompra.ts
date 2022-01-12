import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import Pedido from './Pedido';
import Produto from './Produto';

@Entity('pedido_compra')
class PedidoCompra {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ precision: 10, scale: 2 })
	valor: number;

	@Column()
	quantidade: number;

	@ManyToOne(() => Pedido, pedido => pedido.pedidoCompra)
	@JoinColumn({ name: 'pedidos_id' }) 
	pedido: Pedido;

	@ManyToOne(() => Produto, produto => produto.pedidoCompra)
	@JoinColumn({ name: 'produtos_id' }) 
	produto: Produto;

	@UpdateDateColumn()
	updatedAt: Date;

	@CreateDateColumn()
	createdAt: Date;
}

export default PedidoCompra;
