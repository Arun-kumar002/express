let  nodemailer=require('nodemailer');



var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "706f24d6291d91",
      pass: "6bdbd2be0f36c4"
    }
  });
let option={
    from:'706f24d6291d91',
    to:'dexterak002@gmail.com',
    sub:'node mailer test',
    text:'hai boiyee'
}