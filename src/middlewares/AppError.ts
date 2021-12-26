import { Request, Response, NextFunction } from 'express';
import ExceptionError from '../errors/exceptionError';

const AppError = (
	error: Error,
	request: Request,
	response: Response,
	next: NextFunction
) => {
	if (error instanceof ExceptionError) {
		return response.status(error.statusCode).json({ message: error.message });
	}

	return response.status(500).json({ message: 'Erro interno no servidor' });
}

export default AppError;
