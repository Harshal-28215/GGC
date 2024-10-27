"use server"

import nodemailer from "nodemailer";
import path from 'path';

  export default async function emailHandler(formdata : string, name : string | undefined) {

      console.log('api called', formdata);
      

  
        // Create a transporter using SMTP configuration
        const transporter = nodemailer.createTransport({
          service: 'Gmail', // You can use 'SMTP', or other services like 'SendGrid', etc.
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });
  
      const filePath = path.join(process.cwd(), 'public', 'GGC-BROCHURE.pdf');
      

        // Email options including the PDF attachment
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to : formdata, // Recipient email
          subject : 'Thank You for Contacting Gujarat Group of Companies – Here’s Your Brochure', // Email subject
          html : name == ""? 
          `<div style="font-family: Arial, sans-serif;">
            <p>Thank you for getting in touch with us through our contact form. We appreciate your interest in <b> Gujarat Group of Companies.</b></p>
            <p>As requested, we have attached our company brochure, which includes comprehensive details about our services:
            <br>
            <b>Gujarat Overseas: Import/Export services </b> <br>
            <b>Gujarat Trading : Agri-Commodities sourcing and supply </b> <br>
            <b>Ankan Industries: Ginning services </b></p>
            <p>We will review your inquiry and get back to you as soon as possible. In the meantime, feel free to browse through the brochure for more information about how we can assist with your needs.</p>
            <p>If you have any questions or require further assistance, please don't hesitate to contact us at gujaratgroupofcompanies@gmail.com.</p>
            <p>Thank you again for considering Gujarat Group of Companies. We look forward to working with you.</p>
            <h4>Best regards, <br> Gujarat Group of Companies <br> gujaratgroupofcompanies@gmail.com </h4>
          </div>` 

          :

          `<div style="font-family: Arial, sans-serif;">
            <h1 style="color: #2196F3;">Dear ${name},</h1>
            <p>Thank you for getting in touch with us through our contact form. We appreciate your interest in <b> Gujarat Group of Companies.</b></p>
            <p>As requested, we have attached our company brochure, which includes comprehensive details about our services:
            <br>
            <b>Gujarat Overseas: Import/Export services </b> <br>
            <b>Gujarat Trading : Agri-Commodities sourcing and supply </b> <br>
            <b>Ankan Industries: Ginning services </b></p>
            <p>We will review your inquiry and get back to you as soon as possible. In the meantime, feel free to browse through the brochure for more information about how we can assist with your needs.</p>
            <p>If you have any questions or require further assistance, please don't hesitate to contact us at gujaratgroupofcompanies@gmail.com.</p>
            <p>Thank you again for considering Gujarat Group of Companies. We look forward to working with you.</p>
            <h4>Best regards, <br> Gujarat Group of Companies <br> gujaratgroupofcompanies@gmail.com </h4>
          </div>`,
          attachments: [
            {
                filename: 'GGC-BROCHURE.pdf',
                path: filePath, // Absolute or relative path to the file on the server
                contentType: 'application/pdf',
            },
          ],
        };
  
        try {
          // Send the email
          const info = await transporter.sendMail(mailOptions);
          console.log('Email sent successfully:', info);
        } catch (error) {
          console.error('Error sending email:', error);
        }
  } `1`