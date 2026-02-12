import 'dotenv/config';
import { Resend } from 'resend';
import { WelcomeEmail } from './emails/welcome';
import { ReminderEmail } from './emails/reminder';

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailOptions {
  type: 'welcome' | 'reminder';
  to: string | string[];
  userName?: string;
  companyName?: string;
}

async function sendEmail({ type, to, userName, companyName }: SendEmailOptions) {
  try {
    let emailComponent;
    let subject;

    if (type === 'welcome') {
      emailComponent = WelcomeEmail({ userName });
      subject = 'Welcome to Tapp!';
    } else {
      emailComponent = ReminderEmail({ userName });
      subject = 'Your Tapp plan is now active';
    }

    const data = await resend.emails.send({
      from: 'Tapp <onboarding@resend.dev>',
      to: Array.isArray(to) ? to : [to],
      subject,
      react: emailComponent,
    });

    console.log('✅ Email sent successfully:', data);
    return data;
  } catch (error) {
    console.error('❌ Error sending email:', error);
    throw error;
  }
}

// CLI usage
const args = process.argv.slice(2);
const type = args[0] as 'welcome' | 'reminder';
const email = args[1] || 'test@example.com';
const userName = args[2] || 'Niels';

if (!type || !['welcome', 'reminder'].includes(type)) {
  console.error('Usage: npm run send [welcome|reminder] [email] [userName]');
  process.exit(1);
}

sendEmail({ type, to: email, userName });

export { sendEmail };