import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    const { name, phone, message, tg } = await req.json();

    if (!name || !phone || !message || !tg) {
        return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
    }

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Website Contact" <${process.env.SMTP_USER}>`,
            to: process.env.RECEIVER_EMAIL,
            subject: 'New Contact Form Submission',
            text: `Name: ${name}\nPhone: ${phone}\nTelegram: ${tg}\nMessage: ${message}`,
        });

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
    }
}
