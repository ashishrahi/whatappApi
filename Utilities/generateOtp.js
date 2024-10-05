const crypto = require('crypto');

function generateOTP(length) {
    const characters = '0123456789'; // Only digits
    const bytes = crypto.randomBytes(length);
    let otp = '';

    for (let i = 0; i < length; i++) {
        otp += characters[bytes[i] % characters.length];
    }

    return otp;
}

module.exports = { generateOTP };
