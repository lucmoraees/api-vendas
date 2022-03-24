export interface IUser {
	id: number;
	nome: string;
	email: string;
	password: string;
	avatar: string;
	updatedAt: Date;
	createdAt: Date;
}

export interface CreateUser {
	nome: string;
	email: string;
	password: string;
	avatar?: string;
}

export interface UsusrioView {
  id: number;
  nome: string;
  email: string,
  avatar: string,
  updatedAt: Date,
	createdAt: Date,
}

export interface Auth {
	tokenAuth: string;
}
