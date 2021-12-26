import { hash } from 'bcryptjs';

const hashPassword = async (password: string): Promise<string> => {
	const hashed = await hash(password, 8);

	return hashed;
}

export default hashPassword;
