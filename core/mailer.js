const nodemailer = require("nodemailer");


class Mailer {
	constructor(mailConfig) {
		this.transporter = nodemailer.createTransport(mailConfig)
	}

	async sendMail (mailData) {
		await this.transporter.sendMail(mailData);
	}
}

module.exports = Mailer;