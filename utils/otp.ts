"use server"

import nodemailer from "nodemailer";

export default async function otpHandler(formdata: string) {

    console.log('api called', formdata);

    const otp = Math.floor(100000 + Math.random() * 900000);


    // Create a transporter using SMTP configuration
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // You can use 'SMTP', or other services like 'SendGrid', etc.
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });


    // Email options including the PDF attachment
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: formdata, // Recipient email
        subject: 'Email Verification: Your One-Time Password (OTP)', // Email subject
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2 style="color: #2196F3;">Email Verification</h2>
            <p>Dear User,</p>
            <p>Thank you for signing up with Gujarat Group of Companies! To verify your email address, please use the following One-Time Password (OTP):</p>
            <h1 style="color: #2196F3; font-size: 36px; font-weight: bold;">${otp}</h1>
            <p style="margin-top: 10px;">This OTP is valid for the next <strong>10 minutes</strong>. Please enter this code in the verification field on our website to continue.</p>
            <p>If you did not request this OTP, please ignore this email or contact us immediately at <a href="mailto:gujaratgroupofcompanies@gmail.com">gujaratgroupofcompanies@gmail.com</a>.</p>
            <p>Thank you for choosing Gujarat Group of Companies.</p>
            <h4 style="margin-top: 20px;">Best regards,<br>Gujarat Group of Companies</h4>
          </div>
        `,
    };
    
    

    try {
        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info);
        return otp;
    } catch (error) {
        console.error('Error sending email:', error);
    }
}