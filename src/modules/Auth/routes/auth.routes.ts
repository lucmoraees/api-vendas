import { Router } from "express";
import auth from '../controller';
import { validadeAuth } from '../../../validations';

const authRoutes = Router();

authRoutes.post('/auth/login', validadeAuth.login, auth.login);

authRoutes.post('/auth/forgot-password', validadeAuth.forgotPassword, auth.forgotPassword);

authRoutes.post('/auth/reset-password', validadeAuth.resetPassword, auth.resetPassword);

export default authRoutes;
