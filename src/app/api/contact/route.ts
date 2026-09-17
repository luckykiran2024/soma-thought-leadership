import { NextResponse } from 'next/server';

// In-memory sliding-window rate limiter
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

export async function POST(request: Request) {
  try {
    // Extract client IP for rate limiting
    const forwardedFor = request.headers.get('x-forwarded-for');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : 'anonymous-client';

    const now = Date.now();
    const clientRecord = rateLimitMap.get(clientIp);

    if (clientRecord) {
      if (now < clientRecord.resetTime) {
        if (clientRecord.count >= MAX_REQUESTS_PER_WINDOW) {
          return NextResponse.json(
            { error: 'Rate limit exceeded. Please wait a few minutes before sending another message, or email directly.' },
            { status: 429 }
          );
        }
        clientRecord.count += 1;
      } else {
        rateLimitMap.set(clientIp, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
      }
    } else {
      rateLimitMap.set(clientIp, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    }

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
