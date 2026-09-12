import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, organization, role, email, reason, message, honeypot } = body;

    // Spam honeypot check: bots fill hidden fields
    if (honeypot && honeypot.length > 0) {
      return NextResponse.json({ success: true, message: 'Message received' }, { status: 200 });
    }

    // Server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // In a production deployment, this can be piped to Resend, SendGrid, or a webhook.
    // For now, it logs cleanly and responds successfully without exposing any sensitive server keys.
    console.log('[Contact Form Submission Received]', {
      timestamp: new Date().toISOString(),
      name,
      organization: organization || 'N/A',
      role: role || 'N/A',
      email,
      reason: reason || 'General',
      messageLength: message.length,
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message. Soma will respond shortly.',
    });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please reach out via email directly.' },
      { status: 500 }
    );
  }
}
