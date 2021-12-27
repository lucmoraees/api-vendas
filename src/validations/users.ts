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
		password: Joi.string().required(),
		avatar: Joi.string().allow(),
	},
})

const update = celebrate({
	[Segments.BODY]: {
		nome: Joi.string().allow(),
	},
})

const changePassword = celebrate({
	[Segments.BODY]: {
		newPassword: Joi.string().min(6).required(),
		oldPassword: Joi.string().min(6).required(),
	},
})

export default { id, create, update, changePassword }
