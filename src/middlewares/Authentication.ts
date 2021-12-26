import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import ExceptionError from '../errors/exceptionError';
import authConfig from '../configs/auth';

interface Decoded {
  id: number,
  email: string,
}

const freeAccess = (originalUrl: string) => {
  if (originalUrl.indexOf('auth') > -1) {
    return true;
  }

	if (originalUrl.indexOf('files') > -1) {
    return true;
	}

	return false;
};

const Authentication = (req: Request, res: Response, next: NextFunction) => {
	if (freeAccess(req.path)) {
    next();
    return;
  }
	
	const authHeader = req.headers.authorization;

	if (!authHeader) {
		throw new ExceptionError('Envie o token para fazer a autenticação');
	}

	// Bearer {{token}}
	const [type, token] = authHeader.split(' ');

	if (type !== 'Bearer' || !token) {
		throw new ExceptionError('Token mal formado');
	}

	try {
		const decodedToken = verify(token, authConfig.jwt.secret);

		const { id, email } = decodedToken as Decoded;

		req.user = { id, email };

		return next();
	} catch (error) {
		throw new ExceptionError('Token inválido');
	}
}

export default Authentication;
