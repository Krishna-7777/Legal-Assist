
const express = require("express")
const nodemailer = require("nodemailer");


const app = express();
app.use(express.json());

async function mailer(userEmail, userUsername, lawyerEmail, lawyerUsername, time, date) {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: 'manoharmeena245@gmail.com',
                pass: 'wwqvftbyxzotbchw'
            }
        });

        // For User Side
        transporter.sendMail({
            to: userEmail,
            from: "manoharmeena245@gmail.com",
            subject: "Legal Consultation Booking Confirmation",
            text: `Dear ${userUsername},
            
            I am pleased to confirm that I have received your booking request for a legal consultation on ${date} at ${time}. I look forward to meeting you and discussing your legal matter.
            
            if you have any questions or concerns before the consultation, please do not hesitate to reach out to me for any query or doubt on my Email  ${lawyerEmail}.
            
            Thank you for choosing me as your legal counsel. I look forward to helping you resolve your legal matter.
            
            Sincerely,
            ${userUsername}`
        })
            .then((result) => {
                console.log(`Mail Sent to Users Email ${userEmail}`);
            }).catch((err) => {
                console.log("error");
            });


        // For Lawyer Side
        transporter.sendMail({
            to: lawyerEmail,
            from: "manoharmeena245@gmail.com",
            subject: "Legal Consultation Booking Confirmation",
            text: `Dear ${lawyerUsername},
            
            Thank you for confirming the booking request for my legal consultation on ${date} at ${time}. I appreciate your prompt response and look forward to meeting you.
            
            Please let me know in advance what information or documents you require from me to make the consultation as productive as possible. Additionally, if you have any questions or concerns before the consultation, please do not hesitate to reach out to me on my Email   ${userEmail}.
            
            Thank you for your time and consideration. I look forward to speaking with you soon.
            
            Sincerely,
            ${lawyerUsername}`
        })
            .then((result) => {
                console.log(`Mail Sent to Lawyer Email ${lawyerEmail}`);
            }).catch((err) => {
                return ("error");
            });
    } catch (err) {
        console.log("Error while sending mail", err);
    }
}

module.exports = {
    mailer
}