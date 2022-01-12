/* eslint-disable class-methods-use-this */
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

class clientes1641343379317 implements MigrationInterface {
  up = async (queryRunner: QueryRunner): Promise<void> => {
    await queryRunner.createTable(new Table({
      name: 'clientes',
      columns: [
				{
					name: 'id',
					type: 'int',
					isPrimary: true,
					isGenerated: true,
					generationStrategy: 'increment',	
				},
				{
					name: 'nome',
					type: 'varchar',
				},
				{
					name: 'email',
					type: 'varchar',
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
    await queryRunner.dropTable('clientes');
  };
}
export default clientes1641343379317;
