import { Resend } from 'resend';
import ReminderEmail from './emails/reminder';

const resend = new Resend('re_GgvSYVsa_AAukXEmo7RkzNuWjZUFcm43B');

async function sendReminderEmail() {
  try {
    const data = await resend.emails.send({
      from: 'Tapp <onboarding@resend.dev>',
      to: ['vusmo245@gmail.com'],
      subject: 'Your Tapp plan is now active',
      react: ReminderEmail({  userName: 'Niels' }),
    });

    console.log('✅ Email sent successfully:', data);
  } catch (error) {
    console.error('❌ Error sending email:', error);
  }
}

sendReminderEmail();