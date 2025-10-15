import nodemailer from "nodemailer";

// ✅ Define the expected props type
type SendEmailProps = {
  name: string;
  email: string;
  phone: string;
  projectType: string[];
  message: string;
  file?: string;
};

export const sendEmail = async ({
  name,
  email,
  phone,
  projectType,
  message,
  file,
}: SendEmailProps): Promise<void> => {
  try {
    // ✅ Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Convert array to readable format (like bullet list or comma-separated)
    const formattedProjectTypes = projectType.length
      ? `<ul>${projectType.map((type) => `<li>${type}</li>`).join("")}</ul>`
      : "<p>Not specified</p>";

    // ✅ Email content (to you)
    const mailOptions = {
      from: `"Hire Us Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `🚀 New Hire Us Request from ${name}`,
      html: `
        <div style="
          font-family: Arial, sans-serif;
          background-color: #f7f9fc;
          padding: 20px;
          border-radius: 10px;
          border: 1px solid #e1e5ee;
          color: #333;
          line-height: 1.6;
        ">
          <h2 style="color: #2563eb;">💼 New Hire Us Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Project Types:</strong></p>
          ${formattedProjectTypes}
          <p><strong>Message:</strong></p>
          <blockquote style="background:#eef2ff; padding:10px; border-left:4px solid #3b82f6; border-radius:6px;">
            ${message}
          </blockquote>
          ${
            file
              ? `<p><strong>File Link:</strong> <a href="${file}" target="_blank" style="color:#2563eb;">View Attachment</a></p>`
              : ""
          }
          <p style="margin-top:20px; font-size:12px; color:#6b7280;">
            This message was sent from your website’s <em>Hire Us</em> form.
          </p>
        </div>
      `,
    };


       // ✅ Email 2: To CLIENT (auto thank-you)
    const clientMailOptions = {
      from: `"Algorify Labs" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `🎉 Thank You, ${name}! We’ve Received Your Project Request`,
      html: `
        <div style="
          font-family: 'Segoe UI', Arial, sans-serif;
          background-color: #f9fafb;
          padding: 24px;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          color: #111827;
        ">
          <h2 style="color: #2563eb; margin-bottom: 12px;">Hi ${name}, 👋</h2>
          <p style="font-size: 16px;">Thank you for reaching out to <strong>
Algorify Labs</strong>! We’ve received your project inquiry and our team will contact you soon.</p>
          
          <div style="background: #eef2ff; padding: 16px; border-radius: 8px; margin-top: 16px;">
            <p><strong>Here’s a summary of your submission:</strong></p>
            <ul>
              <li><strong>Phone:</strong> ${phone}</li>
              <li><strong>Project Types:</strong> ${projectType.join(", ")}</li>
              <li><strong>Message:</strong> ${message}</li>
            </ul>
          </div>

          <p style="margin-top: 20px; font-size: 15px;">
            📞 You can also contact us directly at:  
            <strong style="color: #2563eb;">+8801719185563</strong>, 
            <strong style="color: #2563eb;">+8801876594444</strong>  
            or reply to this email.
          </p>

          <p style="margin-top: 16px;">Warm regards,<br/>
          <strong>The Algorify Labs Team</strong><br/>
          <span style="font-size: 13px; color: #6b7280;">Algorify Labs • Web & Software Solutions</span></p>
        </div>
      `,
    };



    // ✅ Send email
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(clientMailOptions);

    console.log("✅ Email sent successfully!");
  } catch (error) {
    console.error("❌ Failed to send email:", error);
    throw new Error("Email sending failed.");
  }
};
