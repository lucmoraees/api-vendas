import { createConnection } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import Cliente from './models/Cliente';
import Produto from './models/Produto';
import User from './models/User';
import UserToken from './models/UserToken';

createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'apivendas',
	entities: [
		Produto,
		User,
		UserToken,
		Cliente,
	],
  namingStrategy: new SnakeNamingStrategy(),
})
  .then((connection) => {
    if (connection.isConnected) {
      console.log('Banco conectado!');
    }
  })
  .catch((error) => console.log(error));

