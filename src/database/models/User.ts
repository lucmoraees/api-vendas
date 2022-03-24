import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	UpdateDateColumn,
	CreateDateColumn,
} from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
import { IUser } from '../../@types';

@Entity('users')
class User implements IUser {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	nome: string;

	@Column()
	email: string;

	@Column()
	@Exclude()
	password: string;

	@Column()
	avatar: string;

	@UpdateDateColumn()
	updatedAt: Date;

	@CreateDateColumn()
	createdAt: Date;

	@Expose({ name: 'avatar_url' })
	getAvatarUrl(): string | null {
		if (!this.avatar) return null;

		return `${process.env.API_URL}/uploads/${this.avatar}`;
	};
}

export default User;
