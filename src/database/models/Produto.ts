import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import PedidoCompra from './PedidoCompra';
import { IProduto } from '../../@types';

@Entity('produtos')
class Produto implements IProduto {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	nome: string;

	@Column({ precision: 10, scale: 2 })
	valor: number;

	@Column()
	quantidade: number;

	@OneToMany(() => PedidoCompra, pedidoCompra => pedidoCompra.pedido)
	pedidoCompra: PedidoCompra[];

	@UpdateDateColumn()
	updatedAt: Date;

	@CreateDateColumn()
	createdAt: Date;
}

export default Produto;
