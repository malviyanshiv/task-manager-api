const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "malviyanshiv@gmail.com",
        subject: "Thanks for joining in!",
        text: `Welcome to the app, ${name}. Let me know how you go along with app`,
    });
};

sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "malviyanshiv@gmail.com",
        subject: "Sorry to see you go!",
        text: `Goodbye, ${name}. I hope to see you back soon.`,
    });
};

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail,
};
