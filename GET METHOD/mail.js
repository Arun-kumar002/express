let  nodemailer=require('nodemailer');
// console.log(nodemailer);



 var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "706f24d6291d91",
      pass: "6bdbd2be0f36c4"
    }
  });
// let option={
//     from:'706f24d6291d91',
//     to:'dexterak002@gmail.com',
//     sub:'node mailer test',
//     text:'hai boiyee'
// }

// transport.sendMail(option,(err,info)=>{
//    if(err) throw err;
//    console.log(info.response);
// })


module.exports=transport;


// nodemailer.createTestAccount((err, account) => {
//     // create reusable transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//         host: 'smtp.ethereal.email',
//         port: 587,
//         secure: false, // true for 465, false for other ports
//         auth: {
//             user: account.user, // generated ethereal user
//             pass: account.pass  // generated ethereal password
//         }
//     });
// });

// var mailConfig;
// if (process.env.NODE_ENV === 'production' ){
//     // all emails are delivered to destination
//     mailConfig = {
//         host: 'smtp.sendgrid.net',
//         port: 587,
//         auth: {
//             user: 'real.user',
//             pass: 'verysecret'
//         }
//     };
// } else {
//     // all emails are catched by ethereal.email
//     mailConfig = {
//         host: 'smtp.ethereal.email',
//         port: 587,
//         auth: {
//             user: 'ethereal.user@ethereal.email',
//             pass: 'verysecret'
//         }
//     };
// }
// let transporter = nodemailer.createTransport(mailConfig);

// transporter.sendMail(mailConfig).then(info=>{
//     console.log('Preview URL: ' + nodemailer.getTestMessageUrl(info));
// });