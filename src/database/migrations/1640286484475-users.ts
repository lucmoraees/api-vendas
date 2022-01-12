/* eslint-disable class-methods-use-this */
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

class users1640286484475 implements MigrationInterface {
  up = async (queryRunner: QueryRunner): Promise<void> => {
    await queryRunner.createTable(new Table({
      name: 'users',
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
					isUnique: true,
				},
				{
					name: 'password',
					type: 'varchar',
				},
				{
					name: 'avatar',
					type: 'varchar',
					isNullable: true,
					default: null,
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
    await queryRunner.dropTable('users');
  };
}
export default users1640286484475;
