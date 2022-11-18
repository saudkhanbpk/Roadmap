import * as nodemailer from 'nodemailer'

export const sendMail = async(email:string, link: string) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "khannihar921@gmail.com",
            pass: "hpgkjinzqtgguoof"
        },
        tls: {
            rejectUnauthorized: false
        }

    });

    const info = await transporter.sendMail({
        from: 'Bpk@gmail.com',
        to: email,
        subject: 'Email verification',
        text: 'Please click on the link to verify your email address and activate your account <p> expires in 1 day </p>',
        html: ` <a href="${link}">Click here to confirm your email</a>`,
    });

    console.log('Message sent: %s', info.messageId);

    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}




