import { celebrate, Joi, Segments } from "celebrate";

const login = celebrate({
	[Segments.BODY]: {
		email: Joi.string().required(),
		password: Joi.string().required(),
	},
})

const forgotPassword = celebrate({
	[Segments.BODY]: {
		email: Joi.string().required(),
	},
})

const resetPassword = celebrate({
	[Segments.BODY]: {
		token: Joi.string().required(),
		password: Joi.string().required(),
	},
})

export default { 
	login,
	forgotPassword,
	resetPassword,
};
