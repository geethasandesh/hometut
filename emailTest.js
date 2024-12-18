const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors"); // To handle cross-origin requests

const app = express();
const port = 5000;

// Middleware
app.use(express.json()); // To parse JSON data
app.use(cors()); // Enable CORS for frontend communication

// Nodemailer Transporter Configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "groupartihcus@gmail.com", // Sender's email
    pass: "sgam fzkj myvd ycxv", // App-specific password for Gmail
  },
});

// POST endpoint to send user details via email
app.post("/send-email", (req, res) => {
  const { studentName, area, class: studentClass, parentMobile, board } = req.body;

  // Email content with user details
  const mailOptions = {
    from: "groupartihcus@gmail.com",
    to: "innovimagine@gmail.com", // Receiver email
    subject: "New Home Tuition Registration Details",
    text: `
      New Registration Details:

      Student Name: ${studentName}
      Area: ${area}
      Class: ${studentClass}
      Parent Mobile: ${parentMobile}
      Board: ${board}

      Thank you!
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send({ message: "Failed to send email", error });
    } else {
      console.log("Email sent successfully: " + info.response);
      res.status(200).send({ message: "Email sent successfully!" });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
