import { EntityRepository, Repository, In } from 'typeorm';
import Produto from '../models/Produto';
import { FindProdutos } from '../../@types';

@EntityRepository(Produto)
class ProdutosRepository extends Repository<Produto> {

	public async findByName(nome: string): Promise<Produto | undefined> {
		const produto = this.findOne({ where: { nome } });

		return produto;
	}

	public async findAllByIds(produtos: FindProdutos[]): Promise<Produto[]> {
		const produtosIds = produtos.map((produto) => produto.id);

		const produtosExistentes = await this.find({
			where: {
				id: In(produtosIds)
			}
		})

		return produtosExistentes;
	}
}

export default ProdutosRepository;
