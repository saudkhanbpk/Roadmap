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
        from: ' "Verify Your Email" <Roadmap@gmail.com',
        to: email,
        subject: 'Email verification',
        html: ` <h2> ${email}! Thanks For Registering On Our Site</h2>
        <h4>Please Verify Your Email To Continue....</h4>
        <a href="${link}">Verify  Your Email</a>
        <h4>Link Expires In 24 Hours</h4>
        </h4>
        `,
    });

    console.log('Message sent: %s', info.messageId);

    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}




