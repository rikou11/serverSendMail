const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
// const mysql = require("mysql");

const nodemailer = require("nodemailer");

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cors());
// *----------------------------------------------------------------------------
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "bensaadfares@gmail.com",
    pass: "Fares1960",
  },
});

app.post("/api/sendmail", (req, res) => {
  const stmtgetMessage = req.body.message;
  const getEmail = req.body.email;
  var mailOptions = {
    from: getEmail,
    to: "bensaadfares@gmail.com",
    subject: `Message from ${getEmail}`,
    text: stmtgetMessage,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

app.listen(3001, () => {
  console.log("the server is running at 3001");
});
