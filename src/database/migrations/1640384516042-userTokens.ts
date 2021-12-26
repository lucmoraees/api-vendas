/* eslint-disable class-methods-use-this */
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

class userTokens1640384516042 implements MigrationInterface {
  up = async (queryRunner: QueryRunner): Promise<void> => {
    await queryRunner.createTable(new Table({
      name: 'users_tokens',
      columns: [
				{
					name: 'id',
					type: 'int',
					isPrimary: true,
					isGenerated: true,
					generationStrategy: 'increment',	
				},
				{
					name: 'users_id',
					type: 'int',
				},
				{
					name: 'token',
					type: 'uuid',
					generationStrategy: 'uuid',
					default: 'uuid_generate_v4()',
				},
				{
					name: 'created_at',
					type: 'timestamp',
					default: 'now()',
				},
				{
					name: 'updated_at',
					type: 'timestamp',
					default: 'now()',
				},
			],
			foreignKeys: [
				{
					name: 'users_id',
					referencedTableName: 'users',
					referencedColumnNames: ['id'],
					columnNames: ['users_id'],
					onDelete: 'CASCADE',
					onUpdate: 'CASCADE',
				},
			]
    }), true);
  };

  down = async (queryRunner: QueryRunner): Promise<void> => {
    await queryRunner.dropTable('users_tokens');
  };
}
export default userTokens1640384516042;
