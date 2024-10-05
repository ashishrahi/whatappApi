// otpSender.js (example file name)

const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: "godchance786@gmail.com", // your Gmail account
        pass: "efpp nmyz xusf qart"   // your App Password
    }
});

// Function to send a provided OTP via email
function sendOtpEmail(to, otp, sub = 'Your OTP Code') {
    const msg = `Your OTP code is: ${otp}`;
    
    transporter.sendMail({
        to: to,
        subject: sub,
        text: msg
    }, (err, info) => {
        if (err) {
            console.log('Error:', err);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

// Export the sendOtpEmail function
module.exports = { sendOtpEmail };
