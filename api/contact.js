import nodemailer from "nodemailer";
import multer from "multer";

// Vercel serverless functions have a read-only filesystem (aside from /tmp),
// so attachments are kept in memory instead of written to disk like the local Express route.
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => (result instanceof Error ? reject(result) : resolve(result)));
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    await runMiddleware(req, res, upload.single("file"));

    const { name, email, phone, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: subject || "Website Enquiry",
      html: `
        <h2>New Website Enquiry</h2>

        <table
          border="1"
          cellpadding="8"
          cellspacing="0"
          style="border-collapse: collapse;"
        >
          <tr>
            <td><b>Name</b></td>
            <td>${name || ""}</td>
          </tr>

          <tr>
            <td><b>Email</b></td>
            <td>${email || ""}</td>
          </tr>

          <tr>
            <td><b>Phone</b></td>
            <td>${phone || ""}</td>
          </tr>

          <tr>
            <td><b>Subject</b></td>
            <td>${subject || ""}</td>
          </tr>
        </table>

        <br />

        <h3>Message</h3>

        <p>${message || ""}</p>
      `,
    };

    if (req.file) {
      mailOptions.attachments = [
        {
          filename: req.file.originalname,
          content: req.file.buffer,
        },
      ];
    }

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully.",
    });
  } catch (error) {
    console.error("========== CONTACT API ERROR ==========");
    console.error("Message:", error.message);
    console.error("Code:", error.code);
    console.error("Command:", error.command);
    console.error("Response:", error.response);
    console.error("========================================");

    return res.status(500).json({
      success: false,
      message: error.message,
      code: error.code || null,
    });
  }
}
