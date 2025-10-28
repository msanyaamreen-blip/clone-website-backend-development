import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, company, email, service } = body;

    // Validate required fields
    if (!name || !phone || !email || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email content
    const emailContent = `
New Consultation Request

Name: ${name}
Phone: ${phone}
Company: ${company || 'Not provided'}
Email: ${email}
Service Need: ${service}

---
This request was submitted through the Amphitrite Technologies website.
    `.trim();

    // Send email using Resend API (you'll need to set up Resend)
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      // Log to console if no email service configured
      console.log('Consultation Request:', emailContent);
      
      // Return success anyway (form still works)
      return NextResponse.json({ 
        success: true, 
        message: 'Consultation request received' 
      });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'Amphitrite Technologies <onboarding@resend.dev>',
        to: ['sanyaamreen.4813@gmail.com'],
        subject: `New Consultation Request from ${name}`,
        text: emailContent,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #00d4aa;">New Consultation Request</h2>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Company:</strong> ${company || 'Not provided'}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Service Need:</strong> ${service}</p>
            </div>
            <p style="color: #666; font-size: 12px;">This request was submitted through the Amphitrite Technologies website.</p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Email send failed:', error);
      throw new Error('Failed to send email');
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Consultation request sent successfully' 
    });

  } catch (error) {
    console.error('Error processing consultation request:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
