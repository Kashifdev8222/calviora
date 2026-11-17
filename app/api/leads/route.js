import { NextResponse } from 'next/server';
import { connectDB } from '../../../server/db.js';
import Lead from '../../../server/models/Lead.js';

export const dynamic = 'force-dynamic';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const email = String(body?.email || '').trim().toLowerCase();
    const plan = String(body?.plan || '').trim();
    const source = String(body?.source || 'website').trim();

    if (!emailPattern.test(email)) {
      return NextResponse.json({ message: 'A valid email is required.' }, { status: 400 });
    }

    const db = await connectDB();
    if (!db) {
      return NextResponse.json({ message: 'Database is not configured.' }, { status: 503 });
    }

    const lead = await Lead.create({ email, plan, source });
    return NextResponse.json({ id: lead.id, email: lead.email }, { status: 201 });
  } catch (error) {
    if (error?.code === 11000) {
      return NextResponse.json({ message: 'This email is already registered.' }, { status: 409 });
    }
    console.error(error);
    return NextResponse.json({ message: 'Could not save this signup.' }, { status: 500 });
  }
}
