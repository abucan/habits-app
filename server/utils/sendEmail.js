// const SibApiV3Sdk = require('sib-api-v3-sdk');
// const defaultClient = SibApiV3Sdk.ApiClient.instance;

// const apiKey = defaultClient.authentications['api-key'];

// var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

// var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

// sendSmtpEmail = {
//     sender: {
//         email:"ante.bucan.st@gmail.com",
//         name:"Ante Bucan"
//     },
//     to:[  
//         {  
//            email:"bucanantehd@gmail.com",
//            name:"Ante Bucan"
//         }
//      ],
//      subject:"Verify Email Address",
//      htmlContent:"<html><head></head><body><p>Hello,</p>This is my first transactional email sent from Brevo.</p></body></html>"
// }

// apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
//     console.log('API called successfully. Returned data: ' + data.htmlContent);
//   }, function(error) {
//     console.error(error);
//   });