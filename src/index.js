const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");

const { sendBasicEmail } = require("./services/email-service");

const app = express();

const setupAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.listen(PORT, () => {
    sendBasicEmail(
      "support@admin.com",
      "movieticketservice@gmail.com",
      "This is a testing mail",
      "Hey, how are you, I hope you like the support"
    );
    console.log(`Server listening on port: ${PORT}`);
  });
};

setupAndStartServer();
