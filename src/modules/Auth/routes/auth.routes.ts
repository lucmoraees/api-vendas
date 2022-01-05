import { Router } from "express";
import auth from '../controller';
import { validateAuth } from '../../../validations';

const authRoutes = Router();

authRoutes.post('/auth/login', validateAuth.login, auth.login);

authRoutes.post('/auth/forgot-password', validateAuth.forgotPassword, auth.forgotPassword);

authRoutes.post('/auth/reset-password', validateAuth.resetPassword, auth.resetPassword);

export default authRoutes;
