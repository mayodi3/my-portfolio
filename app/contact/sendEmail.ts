"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mayodisaac3@gmail.com",
      pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD!,
    },
  });

  const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Message</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              
              <!-- Header -->
              <tr>
                <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
                  <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">
                    📬 New Contact Message
                  </h1>
                  <p style="margin: 10px 0 0 0; color: #e0e7ff; font-size: 14px;">
                    You've received a new message from your portfolio
                  </p>
                </td>
              </tr>

              <!-- Content -->
              <tr>
                <td style="padding: 40px 30px;">
                  
                  <!-- Sender Info Card -->
                  <div style="background-color: #f8fafc; border-left: 4px solid #667eea; padding: 20px; margin-bottom: 30px; border-radius: 4px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-bottom: 12px;">
                          <span style="display: inline-block; background-color: #667eea; color: #ffffff; padding: 4px 12px; border-radius: 12px; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                            Sender Details
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;">
                          <strong style="color: #334155; font-size: 14px; display: inline-block; width: 80px;">Name:</strong>
                          <span style="color: #64748b; font-size: 14px;">${name}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;">
                          <strong style="color: #334155; font-size: 14px; display: inline-block; width: 80px;">Email:</strong>
                          <a href="mailto:${email}" style="color: #667eea; text-decoration: none; font-size: 14px; font-weight: 500;">
                            ${email}
                          </a>
                        </td>
                      </tr>
                    </table>
                  </div>

                  <!-- Message Section -->
                  <div style="margin-bottom: 30px;">
                    <h2 style="color: #1e293b; font-size: 16px; font-weight: 600; margin: 0 0 16px 0; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0;">
                      💬 Message
                    </h2>
                    <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 20px; color: #475569; font-size: 15px; line-height: 1.6;">
                      ${message.replace(/\n/g, '<br>')}
                    </div>
                  </div>

                  <!-- Action Button -->
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td align="center" style="padding: 20px 0;">
                        <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 6px; font-weight: 600; font-size: 14px; box-shadow: 0 4px 6px rgba(102, 126, 234, 0.3);">
                          Reply to ${name}
                        </a>
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                  <p style="margin: 0; color: #94a3b8; font-size: 13px; line-height: 1.6;">
                    This message was sent from your portfolio contact form<br>
                    <strong style="color: #64748b;">mayodisaac3@gmail.com</strong>
                  </p>
                  <p style="margin: 16px 0 0 0; color: #cbd5e1; font-size: 12px;">
                    © ${new Date().getFullYear()} Your Portfolio. All rights reserved.
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  const mailOptions = {
    from: "mayodisaac3@gmail.com",
    to: "mayodisaac3@gmail.com",
    subject: `New message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
    html: htmlTemplate,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Failed to send email" };
  }
}