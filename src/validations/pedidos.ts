import { Joi, celebrate, Segments } from 'celebrate';

const create = celebrate({
	[Segments.BODY]: {
		clienteId: Joi.number().required(),
		produtos: Joi.required(),
	},
});

const pedidoId = celebrate({
	[Segments.PARAMS]: {
		id: Joi.number().required(),
	}
});

export default { create, pedidoId };