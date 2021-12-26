import { EntityRepository, Repository } from 'typeorm';
import Produto from '../models/Produto';

@EntityRepository(Produto)
class ProdutosRepository extends Repository<Produto> {

	public async findByName(nome: string): Promise<Produto | undefined> {
		const produto = this.findOne({ where: { nome } });

		return produto;
	}
}

export default ProdutosRepository;
