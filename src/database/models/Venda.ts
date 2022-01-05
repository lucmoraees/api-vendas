import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
class Venda {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ precision: 10, scale: 2 })
	valor: number;

	@Column()
	quantidade: number;

	@UpdateDateColumn()
	updatedAt: Date;

	@CreateDateColumn()
	createdAt: Date;
}

export default Venda;
