import nodemailer, { SentMessageInfo } from 'nodemailer';
import fs from 'fs';
import handlebars from "handlebars";
import { ObjectGeneric } from "../@types";

interface SendEmail {
  to: string;
  subject: string;
  nameTemplate: string;
	variaveis?: ObjectGeneric[],
}

const getTemplate = (name: string, variaveis: ObjectGeneric[]): string => {
	const filePath = `${__dirname}/templates/${name}.html`;
	
	const html = fs.readFileSync(filePath, 'utf-8').toString();

	const template = handlebars.compile(html);

	return template(variaveis);
}

export default getTemplate;

export const sendEmail = async ({
  to,
  subject,
  nameTemplate,
	variaveis = [],
}: SendEmail): Promise<SentMessageInfo> => {
	const accountTest = await nodemailer.createTestAccount();
	
	const transporter = nodemailer.createTransport({
		host: accountTest.smtp.host,
		port: accountTest.smtp.port,
		secure: accountTest.smtp.secure,
		auth: {
				user: accountTest.user,
				pass: accountTest.pass
		}
	});

	const html = getTemplate(nameTemplate, variaveis);

	const message = await transporter.sendMail({
		from: 'naoresponda@apivendas.com.br',
		to,
		subject,
		html,
	})

	console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));

	return message;
};
