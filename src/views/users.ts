import User from '../database/models/User';
import { UsusrioView } from '../@types';

export const userWithouPassword = (usuario: User): UsusrioView => ({
  id: usuario.id,
  nome: usuario.nome,
  email: usuario.email,
	avatar: usuario.avatar,
	updatedAt: usuario.updatedAt,
	createdAt: usuario.createdAt
});
