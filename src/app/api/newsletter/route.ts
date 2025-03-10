import { createFUBLead } from '@/utils/followUpBoss';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Create lead in Follow Up Boss
    const lead = await createFUBLead(email, 'Website Newsletter', ['Newsletter Subscriber']);

    if (!lead) {
      return NextResponse.json(
        { error: 'Failed to create lead in Follow Up Boss' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: 'Successfully subscribed to newsletter',
      lead
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 