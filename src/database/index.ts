import { createConnection } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import Cliente from './models/Cliente';
import Produto from './models/Produto';
import User from './models/User';
import UserToken from './models/UserToken';
import PedidoCompra from './models/PedidoCompra';
import Pedido from './models/Pedido';

createConnection({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'apivendas',
	entities: [
		Produto,
		User,
		UserToken,
		Cliente,
		PedidoCompra,
		Pedido,
	],
  namingStrategy: new SnakeNamingStrategy(),
})
  .then((connection) => {
    if (connection.isConnected) {
      console.log('Banco conectado!');
    }
  })
  .catch((error) => console.log(error));
