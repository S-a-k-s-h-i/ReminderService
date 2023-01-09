const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");

// const { sendBasicEmail } = require("./services/email-service");
const TicketController = require("./controllers/ticket-controller");
const jobs = require("./utils/job");

const app = express();

const setupAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post("/api/v1/tickets", TicketController.create);
  app.listen(PORT, () => {
    // sendBasicEmail(
    //   "support@admin.com",
    //   "movieticketservice@gmail.com",
    //   "This is a testing mail",
    //   "Hey, how are you, I hope you like the support"
    // );
    jobs();
    console.log(`Server listening on port: ${PORT}`);
  });
};

setupAndStartServer();
