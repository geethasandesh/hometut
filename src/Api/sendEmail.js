const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { studentName, area, class: studentClass, parentMobile, board } = req.body;

    // Nodemailer Transporter Configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Use environment variable
        pass: process.env.EMAIL_PASS, // Use environment variable
      },
    });
    

    // Email content with user details
    const mailOptions = {
      from: "groupartihcus@gmail.com",
      to: "innovimagine@gmail.com", // Replace with your receiver email
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

    try {
      // Send the email
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully: " + info.response);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send email", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
