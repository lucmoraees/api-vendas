import { Router } from "express";
import produtosRoutes from "../modules/Produtos/routes/produtos.routes";
import usersRoutes from '../modules/Users/routes/users.routes';
import authRoutes from '../modules/Auth/routes/auth.routes';

const routes = Router();

routes.use(authRoutes);
routes.use(usersRoutes);
routes.use(produtosRoutes);

export default routes;
