const sendEmail = require('./sendEmail');

// TODO change link later
const sendVerificationEmail = async ({
  name,
  email,
  verificationToken,
}) => {
  const subject = 'Verify your email';
  const htmlContent = `
        <h1>Verify your email</h1>
        <p>Hey, ${name}, click the link below to verify your email</p>
        <a href="http://localhost:5000/verify-email?token=${verificationToken}&email=${email.email}">Verify email</a>
    `;

  await sendEmail({ to: email, subject, htmlContent });
};

module.exports = sendVerificationEmail;
