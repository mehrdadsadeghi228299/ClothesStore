const nodemailer = require('nodemailer');

function sendingEmailService(rootEmail,rootEmailPass,SenderEmail,receiverEmail,subject,messageText){
 try {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: rootEmail,
          pass: rootEmailPass
        }
      });

      var mailOptions = {
        from:SenderEmail ,
        to: receiverEmail,
        subject:subject ,
        text: messageText
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            return action={'Error: ' : error};       
         } else {
            return action={'Email sent: ' : info.response};
        }
      });
 } catch (error) {
    return error
 }

}


module.exports={
    sendingEmailService
}