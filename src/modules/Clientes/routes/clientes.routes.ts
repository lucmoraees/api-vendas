import { Router } from 'express';
import clientes from '../controller';
import { validateClientes } from '../../../validations';

const clientesRoutes = Router();

clientesRoutes.get('/clientes', clientes.getList);

clientesRoutes.get('/clientes/:id', validateClientes.id, clientes.getClienteById);

clientesRoutes.post('/clientes', validateClientes.create, clientes.create);

clientesRoutes.put('/clientes/:id', validateClientes.update, clientes.updateCliente);

clientesRoutes.delete('/clientes/:id', validateClientes.id, clientes.deleteCliente);

export default clientesRoutes;
 