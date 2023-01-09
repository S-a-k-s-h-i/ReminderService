const sender = require("../config/emailConfig");
const TicketRepository = require("../repositories/ticket-repository");

const ticketRepository = new TicketRepository();

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

const fetchPendingEmails = async (timestamp) => {
  try {
    const response = await ticketRepository.get({ status: "PENDING" });
    return response;
  } catch (error) {
    console.log("Something went worng while sending mail");
  }
};

const createNotification = async (data) => {
  try {
    const response = await ticketRepository.create(data);
    return response;
  } catch (error) {
    console.log("Something went worng while sending mail");
  }
};

const updateTicket = async (data, ticketId) => {
  try {
    const response = await ticketRepository.update(data, ticketId);
    return response;
  } catch (error) {
    console.log("Something went worng while sending mail");
  }
};

module.exports = {
  sendBasicEmail,
  fetchPendingEmails,
  createNotification,
  updateTicket,
};

/**
 * SMTP -> abcom@.com
 * receiver -> det@.com
 *
 * from : supportab@.com
 */
