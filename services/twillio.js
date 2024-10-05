// Import the Twilio client
const twilio = require('twilio');

// Define the Twilio phone number
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

const client = new twilio(accountSid, authToken);

// Function to send OTP via SMS
function sendOTPSMS(phone, otp) {
  return client.messages.create({
    body: `Your OTP code is ${otp}`,
    from: twilioPhoneNumber,
    to: phone,
  })
  .then(message => console.log(`Message sent with SID: ${message.sid}`))
  .catch(error => console.error(`Error sending message: ${error.message}`));
}


// Export the function
module.exports = { sendOTPSMS };
