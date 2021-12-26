import { Router } from 'express';
import produtos from '../controller';
import { validateProdutos } from '../../../validations';

const produtosRoutes = Router();

produtosRoutes.get('/produtos', produtos.getList);

produtosRoutes.get('/produtos/:id', validateProdutos.id, produtos.getProdutoById);

produtosRoutes.post('/produtos', validateProdutos.create, produtos.create);

produtosRoutes.put('/produtos/:id', validateProdutos.update, produtos.updateProduto);

produtosRoutes.delete('/produtos/:id', validateProdutos.id, produtos.deleteProduto);

export default produtosRoutes;
