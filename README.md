# Love Leters

## About

This server will send a series of email at a frequency of the cron job that is set. 

## Setup

Fill in the sample.config.json and rename to **config.json**. *You might have to lower the security from your email provider*

Example:
```
{
	"mailConfig": {
  		"service": "gmail",
		"auth": {
		  "user": "example@gmail.com",
		  "pass": "examplePassword123"
		}	 
	},
	"toEmail": "lovers@email.com"
}
```

Fill out phrases.json will be an array of strings. With different phrases you want to send to your love. If you want to add PSes in a single email seperate the main body and the PS with a ```|```. It doesn't matter the order becuase the server will pick a phrase at random. 

Example:
```
[
	"Have a great day!",
	"You are amazing.|I Love You"
]
```

In server.js update the cron to wanted frequency.

Update ./core/htmlCreator.js to your spec, **Try to avoid editing template strings**

 

