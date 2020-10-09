const cron = require('node-cron');
const config = require("./config");
const mailer = new (require("./core/mailer"))(config.mailConfig);
const htmlCreator = require("./core/htmlCreator");
const phrases = require('./phrases');

cron.schedule('*/1 * * * *', async () => {
	// (async() =>{		
  try{
  		const wordsToSend = phrases.splice(Math.floor(Math.random()*phrases.length), 1);

		await mailer.sendMail({
			from: config.mailConfig.auth.user, 
			to: config.toEmail,
			subject: `Daily Mail ${pharses.length} to go.`,
			html: htmlCreator(wordsToSend[0]),
		});
	} catch (err) {

		throw err
	}
})();
