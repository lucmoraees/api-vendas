/* eslint-disable class-methods-use-this */
import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from 'typeorm';

class addColumnInVendas1641425958550 implements MigrationInterface {
  up = async (queryRunner: QueryRunner): Promise<void> => {
    await queryRunner.addColumn(
			'vendas',
			new TableColumn({
				name: 'produtos_id',
				type: 'int',
				isNullable: true,
			})
		);

		await queryRunner.createForeignKey(
			'vendas',
			new TableForeignKey({
				name: 'produtosId',
				columnNames: ['produtos_id'],
				referencedTableName: 'produtos',
				referencedColumnNames: ['id'],
				onDelete: 'SET NULL',
			}),
		);
  };

  down = async (queryRunner: QueryRunner): Promise<void> => {
    await queryRunner.dropForeignKey('vendas', 'produtos_id');
  
		await queryRunner.dropColumn('vendas', 'produtos_id');
	};
}
export default addColumnInVendas1641425958550;
