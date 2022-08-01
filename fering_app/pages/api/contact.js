import sgMail from '@sendgrid/mail';

require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function contact(req, res) {
  const { firstname, lastname, email, phone, subject, message } = req.body;
  const msg = {
    to: 'valeksicbot@gmail.com',
    from: 'valeksicbot@gmail.com',
    subject: `${firstname} ${lastname} vam je poslao/la poruku`,
    text: `${firstname} ${lastname} vam je poslao/la poruku.\n\n${message}`,
    html: `
      <strong>Email: ${email}</strong><br>
      <strong>Telefon: ${phone}</strong><br>
      <p>${message}</p>
    `
  }
  try {
    await sgMail.send(msg);
    res.status(200).json({ message: 'Poruka je uspesno poslata' });
  } catch (error) {
    res.status(500).json({ message: 'Poruka nije poslata' });
  }
}