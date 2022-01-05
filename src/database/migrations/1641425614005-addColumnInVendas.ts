/* eslint-disable class-methods-use-this */
import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from 'typeorm';

class addColumnInVendas1641425614005 implements MigrationInterface {
  up = async (queryRunner: QueryRunner): Promise<void> => {
    await queryRunner.addColumn(
			'vendas',
			new TableColumn({
				name: 'pedidos_id',
				type: 'int',
				isNullable: true,
			})
		);

		await queryRunner.createForeignKey(
			'vendas',
			new TableForeignKey({
				name: 'pedidosId',
				columnNames: ['pedidos_id'],
				referencedTableName: 'pedidos',
				referencedColumnNames: ['id'],
				onDelete: 'SET NULL',
			}),
		);
  };

  down = async (queryRunner: QueryRunner): Promise<void> => {
    await queryRunner.dropForeignKey('vendas', 'pedidosId');
  
		await queryRunner.dropColumn('vendas', 'pedidos_id');
	};
}
export default addColumnInVendas1641425614005;
