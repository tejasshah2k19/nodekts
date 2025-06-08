const nodemailer = require('nodemailer');
require('dotenv').config();


function sendWelcomeMail(firstName, to) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_ID,      // your Gmail
            pass: process.env.MAIL_PASSWORD,         // your App Password
        }
    });


    let mailOptions = {
        from: 'Tejas Shah" <support@mysite.com>',
        to: to,
        subject: 'Hi'+firstName+', Welcome to MySite!',
        html: '<b>Welcome to mysite...</b>'
    };


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Error: ', error);
        }
        console.log('Message sent: %s', info.messageId);
    });
}

module.exports.sendWelcomeMail = sendWelcomeMail 

