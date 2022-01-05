/* eslint-disable class-methods-use-this */
import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from 'typeorm';

class addColumnInPedidos1641346761298 implements MigrationInterface {
  up = async (queryRunner: QueryRunner): Promise<void> => {
    await queryRunner.addColumn(
			'pedidos',
			new TableColumn({
				name: 'cliente_id',
				type: 'int',
				isNullable: true,
			})
		);

		await queryRunner.createForeignKey(
			'pedidos',
			new TableForeignKey({
				name: 'clientId',
				columnNames: ['cliente_id'],
				referencedTableName: 'clientes',
				referencedColumnNames: ['id'],
				onDelete: 'SET NULL',
			}),
		);
  };

  down = async (queryRunner: QueryRunner): Promise<void> => {
    await queryRunner.dropForeignKey('pedidos', 'clientId');
  
		await queryRunner.dropColumn('pedidos', 'cliente_id');
	};
}
export default addColumnInPedidos1641346761298;
