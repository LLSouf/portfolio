import { json } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import type { RequestHandler } from './$types';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  service: 'Zoho',
  auth: {
    user: import.meta.env.VITE_PUBLIC_ZOHO_MAIL,
    pass: import.meta.env.VITE_PRIVATE_ZOHO_PASSWORD
  }
});

export const POST: RequestHandler = async ({ request }) => {
  // Log pour vérifier les credentials
  console.log('Checking credentials:', {
    hasEmail: !!import.meta.env.VITE_PUBLIC_ZOHO_MAIL,
    emailLength: import.meta.env.VITE_PUBLIC_ZOHO_MAIL?.length,
    hasPassword: !!import.meta.env.VITE_PRIVATE_ZOHO_PASSWORD,
    passwordLength: import.meta.env.VITE_PRIVATE_ZOHO_PASSWORD?.length
  });

  try {
    // Vérifier la connexion
    await transporter.verify();
    console.log('SMTP connection verified successfully');

    const data = await request.json() as FormData;

    const mailOptions = {
      from: import.meta.env.VITE_PUBLIC_ZOHO_MAIL,
      to: import.meta.env.VITE_PUBLIC_ZOHO_MAIL,
      replyTo: data.email,
      subject: `Portfolio Contact: ${data.name}`,
      text: `
Name: ${data.name}
Email: ${data.email}
Message: ${data.message}
      `,
      html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info);

    return json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return json(
      { 
        success: false, 
        message: 'Failed to send email',
        error: error.message 
      },
      { status: 500 }
    );
  }
};