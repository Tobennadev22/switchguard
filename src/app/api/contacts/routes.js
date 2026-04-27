import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validation
    if (!name || !email || !message) {
      return Response.json(
        { success: false, message: "All required fields missing." },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_RECEIVER,
      subject: subject || "New Contact Message",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject || "N/A"}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    return Response.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      { success: false, message: "Server Error." },
      { status: 500 },
    );
  }
}
