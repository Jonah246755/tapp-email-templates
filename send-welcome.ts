import { Resend } from 'resend';
import WelcomeEmail from './emails/welcome';

const resend = new Resend('re_GgvSYVsa_AAukXEmo7RkzNuWjZUFcm43B');

async function sendWelcomeEmail() {
  try {
    const data = await resend.emails.send({
      from: 'Tapp <onboarding@resend.dev>',
      to: ['vusmo245@gmail.com'],
      subject: 'Welcome to Tapp!',
      react: WelcomeEmail({ userName: 'Niels' }),
    });

    console.log('✅ Email sent successfully:', data);
  } catch (error) {
    console.error('❌ Error sending email:', error);
  }
}

sendWelcomeEmail();