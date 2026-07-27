import express from "express";
import nodemailer from "nodemailer";
import multer from "multer";
import fs from "fs";

const router = express.Router();

// Upload configuration
const upload = multer({
  dest: "server/uploads/",
  limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB
  },
});

router.post("/", upload.single("file"), async (req, res) => {
  console.log("========== CONTACT API CALLED ==========");

  try {
    console.log("Body:", req.body);
    console.log("File:", req.file);

    const { name, email, phone, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();
    console.log("✅ Gmail SMTP Connected");

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: subject || "Website Enquiry",
      html: `
        <h2>New Website Enquiry</h2>

        <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
          <tr>
            <td><b>Name</b></td>
            <td>${name}</td>
          </tr>

          <tr>
            <td><b>Email</b></td>
            <td>${email}</td>
          </tr>

          <tr>
            <td><b>Phone</b></td>
            <td>${phone}</td>
          </tr>

          <tr>
            <td><b>Subject</b></td>
            <td>${subject}</td>
          </tr>
        </table>

        <br>

        <h3>Message</h3>

        <p>${message}</p>
      `,
    };

    if (req.file) {
      mailOptions.attachments = [
        {
          filename: req.file.originalname,
          path: req.file.path,
        },
      ];
    }

    console.log("Sending email...");

    const info = await transporter.sendMail(mailOptions);

    console.log("✅ Email sent successfully");
    console.log(info);

    if (req.file) {
      fs.unlink(req.file.path, (err) => {
        if (err) console.error("File delete error:", err);
      });
    }

    return res.status(200).json({
      success: true,
      message: "Email sent successfully.",
    });

  } catch (error) {
    console.error("========== EMAIL ERROR ==========");
    console.error(error);
    console.error("=================================");

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;