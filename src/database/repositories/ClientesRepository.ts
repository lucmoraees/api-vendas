import { EntityRepository, Repository } from 'typeorm';
import Cliente from '../models/Cliente';

@EntityRepository(Cliente)
class ClientesRepository extends Repository<Cliente> {
	public async findByName(nome: string): Promise<Cliente | undefined> {
		const cliente = this.findOne({ where: { nome } });

		return cliente;
	}

	public async findByEmail(email: string): Promise<Cliente | undefined> {
		const cliente = this.findOne({ where: { email } });

		return cliente;
	}
	
	public async findById(id: number): Promise<Cliente | undefined> {
		const cliente = this.findOne({ where: { id } });

		return cliente;
	}
}

export default ClientesRepository;
