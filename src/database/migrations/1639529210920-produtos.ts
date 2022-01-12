/* eslint-disable class-methods-use-this */
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

class produtos1639529210920 implements MigrationInterface {
  up = async (queryRunner: QueryRunner): Promise<void> => {
    await queryRunner.createTable(new Table({
      name: 'produtos',
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
    await queryRunner.dropTable('produtos');
  };
}
export default produtos1639529210920;
