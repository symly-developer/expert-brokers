import type { Schema } from "../../data/resource";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: 'email-smtp.ap-southeast-2.amazonaws.com',  // Replace <region> with your SES region
  port: 587,
  secure: false,
  auth: {
    user: 'AKIATLT4CEADCOKHEN46',  // Your SMTP credentials from SES
    pass: 'BC5awUbeW+/xZLl57BqIbj6XWCueOES/irwZyV82ALGO'
  }
});


export const handler: Schema["sayHello"]["functionHandler"] = async (event) => {
  // arguments typed from `.arguments()`
  const { name, email, phone, message } = event.arguments

  // Define the email options
    const mailOptions1 = {
      from: 'nishisharma@expertbrokers.com.au',            // Sender email
      to: 'nishisharma@expertbrokers.com.au, info@thefrontdigital.com.au',                // Recipient email
      subject: '‼️ Form submission form your website',                 // Subject line
      html: `
          <div style="font-family: Arial, sans-serif; color: #333;">
            <h2>New Lead Received</h2>
            <p style="font-size: 14px; color: #555;">Hello,</p>
            <p>A new lead has been received from the website:</p>
            <hr />
            <h3>Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong><br/>${message}</p>
            <hr />
            <p style="font-size: 12px; color: #888;">This email was generated from your website form.</p>
          </div>
        `
    };

    // Define the email options
    const mailOptions2 = {
      from: 'nishisharma@expertbrokers.com.au',            // Sender email
      to: email,                // Recipient email
      subject: '👋 Thank you for getting in touch - '+name,                 // Subject line
      html: `
          <!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="UTF-8" />
                <title>Welcome to Expert Brokers</title>
              </head>
              <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; color: #333; background: #ffffff;">
                <div style="max-width: 600px; margin: auto; padding: 20px;">
                  <h1 style="font-size: 26px; color: #000;">Hello ${name}!</h1>
                  
                  <div style="display: flex; align-items: center; gap: 20px; margin-top: 20px;">
                    <div style="flex: 1;">
                      <p style="font-size: 20px; font-weight: bold;">Welcome to Expert Brokers</p>
                      <a href="https://wa.me/61401809852?text=Hi%20I%20just%20submitted%20an%20enquiry%20on%20your%20website%20and%20would%20like%20to%20discuss%20further."
                        style="display: inline-block; background: #25D366; color: #fff; padding: 8px 16px; text-decoration: none; font-weight: bold; margin-top: 10px; border-radius: 4px;">
                        Chat on WhatsApp
                      </a>
                    </div>
                    <img src="https://assets.expertbrokers.com.au/logos/logo-black.svg" 
                        alt="Nishi Sharma" 
                        style="width: 200px; border-radius: 8px;" />
                  </div>

                  <p style="margin-top: 30px; font-size: 16px;">
                    Thank you for getting in touch with us through our website – we’re excited to connect with you!
                  </p>

                  <p style="font-size: 16px;">
                    One of our team members will review your enquiry and get back to you shortly to assist with your needs.
                  </p>

                  <hr style="margin: 30px 0;" />

                  <p style="font-size: 13px; color: #777;">
                    Expert Brokers<br/>
                    Your Goal | Our Expertise<br/>
                    <a href="https://expertbrokers.com.au" style="color: #555;">www.expertbrokers.com.au</a>
                  </p>
                </div>
              </body>
            </html>
        `
    };

    try {
        const info = await transporter.sendMail(mailOptions1);
        const info2 = await transporter.sendMail(mailOptions2);
        return {

          message: 'Emails sent',
          success: true,
          ownerResponse: info.response,
          customerResponse: info2.response,

        };
    } catch (error) {
        return {
            message: error,
            success: false,
        };
    }



 
  // try {
  //   const response = await fetch('https://blog.expertbrokers.com.au/api/site/contacts', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer w160947c9a16c4c7a81ed844af7632867', // if needed
  //     },
  //     body: JSON.stringify({
  //       name: name,
  //       email: email,
  //       phone: phone,
  //       tags: ['website-lead'],
  //       subscribed: true,
  //       properties: [
  //           {
  //           name: "message",
  //           value: message,
  //           },
  //       ]
  //     }),
  //   });

  //   const data = await response.json();

  //   return {
  //     message: data,  // or data.message depending on response structure
  //     success: response.ok,
  //   };

  // } catch (error) {
  //   return {
  //     message: error instanceof Error ? error.message : 'Unknown error',
  //     success: false,
  //   };
  // }


}