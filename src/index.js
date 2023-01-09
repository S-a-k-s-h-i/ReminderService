const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");

const cron = require("node-cron");
// const { sendBasicEmail } = require("./services/email-service");

const app = express();

const setupAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.listen(PORT, () => {
    // sendBasicEmail(
    //   "support@admin.com",
    //   "movieticketservice@gmail.com",
    //   "This is a testing mail",
    //   "Hey, how are you, I hope you like the support"
    // );
    cron.schedule("*/1 * * * *", () => {
      console.log("running a task every two minutes");
    });
    console.log(`Server listening on port: ${PORT}`);
  });
};

setupAndStartServer();
