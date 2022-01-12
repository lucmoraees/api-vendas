/* eslint-disable class-methods-use-this */
import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from 'typeorm';

class addColumnInPedidoCompra1641425614005 implements MigrationInterface {
  up = async (queryRunner: QueryRunner): Promise<void> => {
    await queryRunner.addColumn(
			'pedido_compra',
			new TableColumn({
				name: 'pedidos_id',
				type: 'int',
				isNullable: true,
			})
		);

		await queryRunner.createForeignKey(
			'pedido_compra',
			new TableForeignKey({
				name: 'pedidos_id',
				columnNames: ['pedidos_id'],
				referencedTableName: 'pedidos',
				referencedColumnNames: ['id'],
				onDelete: 'SET NULL',
			}),
		);
  };

  down = async (queryRunner: QueryRunner): Promise<void> => {
    await queryRunner.dropForeignKey('pedido_compra', 'pedidos_id');
  
		await queryRunner.dropColumn('pedido_compra', 'pedidos_id');
	};
}
export default addColumnInPedidoCompra1641425614005;
