import 'reflect-metadata';
import ExceptionError from '../../../errors/exceptionError';
import service from './service';
import { mockClientList, mockCreateClient, mockUpdateCliente } from './mocks';

describe('Serviços dos clientes', () => {
	test('Criar um novo cliente', async () => {		
		const cliente = await service.create(mockCreateClient);

		expect(cliente).toHaveProperty('id')
	})

	test('Não deve criar um novo cliente com um email existente', async () => {
		expect(
			service.create(mockCreateClient),
		).rejects.toBeInstanceOf(ExceptionError)
	})	

	test('Buscar o cliente pelo id', async () => {
		const cliente = await  service.getClienteById(1);

		expect(cliente).toHaveProperty('id');
	})

	test('Buscar lista de clientes', async () => {
		const clientes = await service.getList();
	
		expect(clientes).toEqual(mockClientList);
	})

	test('Alterar um cliente', async () => {
		const cliente = await service.updateCliente(1, { nome: 'Lucas Moraes de Carvalho' });

		expect(cliente).toEqual(mockUpdateCliente);
	})

	test('Cliente não encontrado pelo id para ser atualizado', async () => {
		expect(
			service.updateCliente(2, { nome: 'Lucas Moraes de Carvalho' }),
		).rejects.toBeInstanceOf(ExceptionError)
	})

	test('Deletar o cliente', async () => {
		await service.deleteCliente(1);

		const cliente = await  service.getClienteById(1);

		expect(cliente).toEqual(undefined)
	})

	test('Cliente não encontrado pelo id para ser deletado', async () => {
		expect(
			service.deleteCliente(1),
		).rejects.toBeInstanceOf(ExceptionError)
	})
})
