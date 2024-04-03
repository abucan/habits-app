require('dotenv').config();
const SibApiV3Sdk = require('sib-api-v3-sdk');

const sendEmail = async ({ to, subject, htmlContent }) => {
  const defaultClient = SibApiV3Sdk.ApiClient.instance;

  const apiKey = defaultClient.authentications['api-key'];

  apiKey.apiKey = process.env.BREVO_API_KEY;

  var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

  var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail = {
    sender: {
      email: 'ante.bucan.st@gmail.com',
      name: 'Habits App',
    },
    to: [to],
    subject: subject,
    htmlContent: htmlContent,
  };

  apiInstance.sendTransacEmail(sendSmtpEmail).then(
    function (data) {
      console.log('Email sent!');
    },
    function (error) {
      console.error(error);
    },
  );
};

module.exports = sendEmail;
