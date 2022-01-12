/* eslint-disable class-methods-use-this */
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

class pedidoCompra1641425419420 implements MigrationInterface {
  up = async (queryRunner: QueryRunner): Promise<void> => {
    await queryRunner.createTable(new Table({
      name: 'pedido_compra',
      columns: [
				{
					name: 'id',
					type: 'int',
					isPrimary: true,
					isGenerated: true,
					generationStrategy: 'increment',	
				},
				{
					name: 'valor',
					type: 'decimal',
					precision: 10,
					scale: 2,
				},
				{
					name: 'quantidade',
					type: 'int',
				},
				{
					name: 'created_at',
					type: 'datetime',
					default: 'now()',
				},
				{
					name: 'updated_at',
					type: 'datetime',
					default: 'now()',
				},
			],
    }), true);
  };

  down = async (queryRunner: QueryRunner): Promise<void> => {
    await queryRunner.dropTable('pedido_compra');
  };
}
export default pedidoCompra1641425419420;
