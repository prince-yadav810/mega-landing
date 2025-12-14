export function generateEmailHTML(formData) {
  const { name, company, email, phone, requirements } = formData;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 8px 24px rgba(0,0,0,0.12); border-radius: 12px; overflow: hidden;">

          <!-- Logo Section -->
          <tr>
            <td style="padding: 30px; text-align: center; background-color: #ffffff;">
              <img src="https://image2url.com/images/1765712763735-5003f785-7eff-4346-ab7d-df6c77626e0b.png"
                   alt="MEGA Enterprise Logo"
                   style="max-width: 180px; height: auto; display: block; margin: 0 auto;" />
            </td>
          </tr>

          <!-- Header -->
          <tr>
            <td style="padding: 40px 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">
                🔔 New Customer Enquiry
              </h1>
              <p style="margin: 10px 0 0; color: #f0f0f0; font-size: 15px; letter-spacing: 0.5px;">
                Received from Contact Form
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">

              <!-- Customer Details -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 32px; background: linear-gradient(to bottom, #f8f9ff 0%, #ffffff 100%); border-radius: 8px; overflow: hidden;">
                <tr>
                  <td colspan="2" style="padding: 20px 24px; border-bottom: 3px solid #667eea; background-color: #f8f9ff;">
                    <h2 style="margin: 0; color: #2c3e50; font-size: 20px; font-weight: 700;">
                      👤 Customer Details
                    </h2>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 24px; width: 140px; color: #5a6c7d; font-weight: 600; vertical-align: top; font-size: 14px;">
                    Full Name:
                  </td>
                  <td style="padding: 16px 24px; color: #2c3e50; font-size: 16px; font-weight: 500;">
                    ${name}
                  </td>
                </tr>
                <tr style="background-color: #fafbfc;">
                  <td style="padding: 16px 24px; color: #5a6c7d; font-weight: 600; vertical-align: top; font-size: 14px;">
                    Company:
                  </td>
                  <td style="padding: 16px 24px; color: #2c3e50; font-size: 16px; font-weight: 500;">
                    ${company}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 24px; color: #5a6c7d; font-weight: 600; vertical-align: top; font-size: 14px;">
                    📧 Email:
                  </td>
                  <td style="padding: 16px 24px;">
                    <a href="mailto:${email}" style="color: #667eea; text-decoration: none; font-size: 16px; font-weight: 500; border-bottom: 2px solid #667eea; padding-bottom: 2px;">
                      ${email}
                    </a>
                  </td>
                </tr>
                <tr style="background-color: #fafbfc;">
                  <td style="padding: 16px 24px; color: #5a6c7d; font-weight: 600; vertical-align: top; font-size: 14px;">
                    📱 Phone:
                  </td>
                  <td style="padding: 16px 24px;">
                    <a href="tel:+91${phone}" style="color: #667eea; text-decoration: none; font-size: 16px; font-weight: 500; border-bottom: 2px solid #667eea; padding-bottom: 2px;">
                      +91 ${phone}
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Requirements -->
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 20px 24px; border-bottom: 3px solid #667eea; background-color: #f8f9ff; border-radius: 8px 8px 0 0;">
                    <h2 style="margin: 0; color: #2c3e50; font-size: 20px; font-weight: 700;">
                      📋 Requirements
                    </h2>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 24px; background: linear-gradient(to bottom right, #f8f9ff 0%, #ffffff 100%); border-left: 5px solid #667eea; border-radius: 0 0 8px 8px; box-shadow: inset 0 2px 4px rgba(102, 126, 234, 0.1);">
                    <p style="margin: 0; color: #2c3e50; line-height: 1.8; white-space: pre-wrap; font-size: 15px;">
                      ${requirements}
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 32px 30px; background: linear-gradient(to bottom, #f8f9ff 0%, #e8ebf5 100%); text-align: center; border-top: 3px solid #667eea;">
              <p style="margin: 0 0 12px; color: #5a6c7d; font-size: 14px; font-weight: 500;">
                📬 This email was sent from the MEGA Enterprise website contact form
              </p>
              <p style="margin: 0 0 16px; color: #7f8c9f; font-size: 13px;">
                ⏰ Received on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
              </p>
              <div style="margin: 20px 0; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                <p style="margin: 0 0 8px; color: #2c3e50; font-size: 15px; font-weight: 700;">
                  MEGA Enterprise
                </p>
                <p style="margin: 0 0 4px; color: #5a6c7d; font-size: 13px;">
                  📍 Plot No. 57, Opp M.I.D.C Water Tank TALOJA, Navi Mumbai - 410208
                </p>
                <p style="margin: 0 0 4px; color: #5a6c7d; font-size: 13px;">
                  📞 +91 750 6070 157 | ☎️ 022 2741 0775
                </p>
                <p style="margin: 0; color: #5a6c7d; font-size: 13px;">
                  ✉️ megaenterprise.info@gmail.com
                </p>
              </div>
              <p style="margin: 16px 0 0; color: #9ca3af; font-size: 12px;">
                © ${new Date().getFullYear()} MEGA Enterprise. All rights reserved.
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
}

export function generatePlainTextEmail(formData) {
  const { name, company, email, phone, requirements } = formData;

  return `
NEW CUSTOMER ENQUIRY - MEGA Enterprise
======================================

CUSTOMER DETAILS:
-----------------
Full Name:     ${name}
Company Name:  ${company}
Email:         ${email}
Phone:         +91 ${phone}

REQUIREMENTS:
-------------
${requirements}

======================================
Received on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
This email was sent from the MEGA Enterprise website contact form
  `;
}
