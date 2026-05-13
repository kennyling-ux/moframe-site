import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();
    const { name, business, phone, plan, message } = body;

    if (!name || !business || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "MoFrame <noreply@mo-frame.com>",
      to: ["kennyling@mo-frame.com"],
      subject: `New Lead: ${business} — ${plan ?? "General Enquiry"}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f6f3; border-radius: 12px;">
          <div style="background: #EE2234; border-radius: 8px; padding: 16px 24px; margin-bottom: 24px;">
            <h1 style="color: white; margin: 0; font-size: 20px;">New Lead — MoFrame</h1>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e0da; color: #787878; font-size: 14px; width: 140px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e0da; color: #212121; font-size: 14px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e0da; color: #787878; font-size: 14px;">Business</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e0da; color: #212121; font-size: 14px; font-weight: 600;">${business}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e0da; color: #787878; font-size: 14px;">WhatsApp</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e0da; color: #212121; font-size: 14px; font-weight: 600;">
                <a href="https://wa.me/${phone.replace(/\D/g, "")}" style="color: #EE2234;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e0da; color: #787878; font-size: 14px;">Plan Interest</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e0da; color: #212121; font-size: 14px; font-weight: 600;">${plan ?? "Not specified"}</td>
            </tr>
            ${
              message
                ? `<tr>
              <td style="padding: 12px 0; color: #787878; font-size: 14px; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; color: #212121; font-size: 14px;">${message}</td>
            </tr>`
                : ""
            }
          </table>

          <div style="margin-top: 24px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e5e0da;">
            <a href="https://wa.me/message/OMRIJWN3SVAKM1" style="display: inline-block; background: #25D366; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
              Reply on WhatsApp
            </a>
          </div>

          <p style="margin-top: 24px; color: #BEBEBE; font-size: 12px; text-align: center;">
            Sent from mo-frame.com contact form
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
