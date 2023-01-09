const sender = require("../config/emailConfig");

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
  try {
    sender.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: mailSubject,
      text: mailBody,
    });
  } catch (error) {
    console.log("Something went worng while sending mail");
  }
};

module.exports = {
  sendBasicEmail,
};

/**
 * SMTP -> abcom@.com
 * receiver -> det@.com
 *
 * from : supportab@.com
 */
