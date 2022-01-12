import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import { pagination } from 'typeorm-pagination';
import routes from './routes';
import AppError from './middlewares/AppError';
import Authentication from './middlewares/Authentication';
import './database';
import { errors } from 'celebrate';
import uploadConfigs from './configs/upload';

const app = express();

app.use(cors());
app.use(express.json());
app.use(pagination);
app.use(Authentication);
app.use(routes);
app.use('/files', express.static(uploadConfigs.directory));
app.use(errors());
app.use(AppError);

app.listen(3333, () => {
	console.log('👻 Servidor iniciado na porta 3333! 👻');
});
