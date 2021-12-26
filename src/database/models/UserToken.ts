import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	UpdateDateColumn,
	CreateDateColumn,
	Generated,
} from 'typeorm';

@Entity('users_tokens')
class UserToken {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	usersId: number;

	@Column()
	@Generated('uuid')
	token: string;

	@UpdateDateColumn()
	updatedAt: Date;

	@CreateDateColumn()
	createdAt: Date;
}

export default UserToken;
