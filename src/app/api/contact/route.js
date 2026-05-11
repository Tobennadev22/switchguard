// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req) {
//   try {
//     const { name, email, subject, message } = await req.json();

//     if (!name || !email || !message) {
//       return Response.json(
//         { success: false, message: "All required fields missing." },
//         { status: 400 },
//       );
//     }

//     await resend.emails.send({
//       from: "support@switchguardadvisory.com",
//       to: process.env.CONTACT_TO,
//       reply_to: email,
//       subject: subject || "New Contact Form Message",
//       html: `
//         <h2>New Contact Message</h2>
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Subject:</b> ${subject || "N/A"}</p>
//         <p><b>Message:</b></p>
//         <p>${message}</p>
//       `,
//     });

//     return Response.json({
//       success: true,
//       message: "Message sent successfully!",
//     });
//   } catch (error) {
//     console.log(error);

//     return Response.json(
//       { success: false, message: "Something went wrong." },
//       { status: 500 },
//     );
//   }
// }

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// For Testing
export async function GET() {
  return Response.json({ ok: true });
}

export async function POST(req) {
  try {
    const { name, company, email, situation, message } = await req.json();

    // Validation
    if (!name || !company || !email || !situation) {
      return Response.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "noreply@@switchguardadvisory.com",
      to: process.env.CONTACT_TO,
      reply_to: email,
      subject: `New Contact Inquiry - ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6; color:#111;">
          <h2>New Contact Form Submission</h2>

          <p><strong>Full Name:</strong> ${name}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Situation:</strong> ${situation}</p>

          <p><strong>Message:</strong></p>
          <p>${message || "No message provided."}</p>

          <hr />

          <p style="font-size:12px; color:#666;">
            Sent from switchguardadvisory.com contact form
          </p>
        </div>
      `,
    });

    return Response.json({
      success: true,
      message:
        "Thank you. We will be in touch within 24 hours on business days!",
    });
  } catch (error) {
    console.log("RESEND ERROR:", error);

    return Response.json(
      {
        success: false,
        message: "Unable to send message. Please try again later.",
      },
      { status: 500 },
    );
  }
}
