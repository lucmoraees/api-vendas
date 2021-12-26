import { EntityRepository, Repository } from 'typeorm';
import UserToken from '../models/UserToken';

@EntityRepository(UserToken)
class UsersTokensRepository extends Repository<UserToken> {
	public async findByToken(token: string): Promise<UserToken | undefined> {
		const userToken = await this.findOne({ where: { token } });

		return userToken;
	}

	public async generateToken(usersId: number): Promise<UserToken | undefined> {
		const userToken = this.create({ usersId });

		await this.save(userToken);

		return userToken;
	}
}

export default UsersTokensRepository;
