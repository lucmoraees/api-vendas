import { Router } from "express";
import produtosRoutes from "../modules/Produtos/routes/produtos.routes";
import usersRoutes from '../modules/Users/routes/users.routes';
import authRoutes from '../modules/Auth/routes/auth.routes';
import clientesRoutes from '../modules/Clientes/routes/clientes.routes';
import pedidosRoutes from '../modules/Pedidos/routes/pedidos.routes';

const routes = Router();

routes.use(authRoutes);
routes.use(usersRoutes);
routes.use(produtosRoutes);
routes.use(produtosRoutes);
routes.use(clientesRoutes);
routes.use(pedidosRoutes);

export default routes;
