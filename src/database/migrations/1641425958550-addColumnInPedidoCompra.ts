/* eslint-disable class-methods-use-this */
import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from 'typeorm';

class addColumnInPedidoCompra1641425958550 implements MigrationInterface {
  up = async (queryRunner: QueryRunner): Promise<void> => {
    await queryRunner.addColumn(
			'pedido_compra',
			new TableColumn({
				name: 'produtos_id',
				type: 'int',
				isNullable: true,
			})
		);

		await queryRunner.createForeignKey(
			'pedido_compra',
			new TableForeignKey({
				name: 'produtos_id',
				columnNames: ['produtos_id'],
				referencedTableName: 'produtos',
				referencedColumnNames: ['id'],
				onDelete: 'SET NULL',
			}),
		);
  };

  down = async (queryRunner: QueryRunner): Promise<void> => {  
		await queryRunner.dropColumn('pedido_compra', 'produtos_id');
	};
}
export default addColumnInPedidoCompra1641425958550;
