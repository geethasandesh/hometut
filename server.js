// server.js
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// Create a Nodemailer transport
const transporter = nodemailer.createTransport({
  service: "gmail", // You can use other services like Outlook, SendGrid, etc.
  auth: {
    user: "groupartihcus@gmail.com", // Your email address
    pass: "sgam fzkj myvd ycxv", // Your email password or an app-specific password
  },
});

// POST route to send email
app.post("/send-email", (req, res) => {
  const { studentName, area, class: studentClass, parentMobile, board } = req.body;

  const mailOptions = {
    from: "groupartihcus@gmail.com", // Your email address
    to: "innovimagine@gmail.com", // Recipient email address
    subject: "New Registration for Home Tuition",
    text: `
      New registration details:
      Student Name: ${studentName}
      Area: ${area}
      Class: ${studentClass}
      Parent Mobile: ${parentMobile}
      Board: ${board}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send("Error sending email: " + error.message);
    }
    res.status(200).send("Email sent successfully: " + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
