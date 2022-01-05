import {
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
	CreateDateColumn,
	ManyToOne,
	JoinColumn,
} from 'typeorm';
import Cliente from './Cliente';

@Entity('pedidos')
class Pedido {
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => Cliente)
	@JoinColumn({ name: 'cliente_id' })
	cliente: Cliente;

	@UpdateDateColumn()
	updatedAt: Date;

	@CreateDateColumn()
	createdAt: Date;
}

export default Pedido;
