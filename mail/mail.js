var nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    port: 465,               
    host: "smtp.gmail.com",
       auth: {
            user: 'nehatanwar405@gmail.com',
            pass: 'nehatanwar**',
         },
    secure: true,
    });
    module.exports=transporter;