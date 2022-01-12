import { Router } from 'express';
import pedidos from '../controller';
import { validatePedidos } from '../../../validations';

const pedidosRoutes = Router();

pedidosRoutes.get('/pedidos/:id', validatePedidos.pedidoId, pedidos.getPedido);

pedidosRoutes.post('/pedidos', validatePedidos.create, pedidos.create);

export default pedidosRoutes;
