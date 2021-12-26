import { celebrate, Joi, Segments } from "celebrate";

export const id = celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().required(),
  },
});

const create = celebrate({
	[Segments.BODY]: {
		nome: Joi.string().required(),
		valor: Joi.number().precision(2).required(),
		quantidade: Joi.number().required(),
	},	
})

const update = celebrate({
	[Segments.PARAMS]: {
    id: Joi.number().required(),
  },
	[Segments.BODY]: {
		valor: Joi.number().precision(2).allow(),
		quantidade: Joi.number().allow(), 
	},
})

export default { id, create, update }
