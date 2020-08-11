// nodemailer
"use strict";
const nodemailer = require("nodemailer");
const fs = require('fs')
const ejs = require('ejs')

const template = fs.readFileSync('./email.ejs','utf-8')
const html = ejs.compile(template)
const htmlWithData = html({
    userName:'fanglin',
    lists:["轻轻贴近你的耳朵","撒浪嘿哟","情话永远不限太多","对你说"]
})


// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    // host: "qq",
    service:'qq',
    port: 465,
    secure: false, // true for 465, false for other ports
    auth: {
      user: '1494228462@qq.com', // generated ethereal user
      pass: 'plfljpjnflhphcja', // generated ethereal password,第一个授权码
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '<1494228462@qq.com>', // sender address
    to: "1494228462@qq.com", // list of receivers
    subject: "恰gi呀", // Subject line
    text: "", // plain text body
    html: htmlWithData, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
