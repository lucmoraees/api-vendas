import { celebrate, Joi, Segments } from "celebrate";

export const id = celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().required(),
  },
});

const create = celebrate({
	[Segments.BODY]: {
		nome: Joi.string().required(),
		email: Joi.string().required(),
	},
})

const update = celebrate({
	[Segments.PARAMS]: {
    id: Joi.number().required(),
  },
	[Segments.BODY]: {
		nome: Joi.string().allow(),
		email: Joi.string().allow(),
	},
})

export default { id, create, update }
