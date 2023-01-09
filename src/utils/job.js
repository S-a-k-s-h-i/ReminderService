const cron = require("node-cron");
const EmailService = require("../services/email-service");
const sender = require("../config/emailConfig");

/**
 * Every 5 minutes
 * Checks is there any pending emails which was expected to be sent by now and is pending
 */
const setUpJobs = () => {
  cron.schedule("*/1 * * * *", async () => {
    const response = await EmailService.fetchPendingEmails();
    response.forEach((email) => {
      sender.sendMail(
        {
          from: "reminderServiceAirline.com",
          to: email.recepientEmail,
          subject: email.subject,
          text: email.content,
        },
        async (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
            await EmailService.updateTicket({ status: "SUCCESS" }, email.id);
          }
        }
      );
    });
  });
};

module.exports = setUpJobs;
