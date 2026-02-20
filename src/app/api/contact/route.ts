import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // TODO: Integrate with your preferred email service
    // Examples: SendGrid, AWS SES, Resend, Nodemailer
    //
    // await sendEmail({
    //   to: "info@p95consulting.com",
    //   subject: `New inquiry from ${name}`,
    //   body: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`,
    // });

    console.log("Contact form submission:", { name, email, company, message });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process request." },
      { status: 500 }
    );
  }
}
