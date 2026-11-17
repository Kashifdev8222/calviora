import { NextResponse } from 'next/server';
import { connectDB } from '../../../server/db.js';

export const dynamic = 'force-dynamic';

export async function GET() {
  let database = 'not-configured';
  try {
    const db = await connectDB();
    database = db ? 'connected' : 'not-configured';
  } catch {
    database = 'error';
  }
  return NextResponse.json({ ok: true, service: 'calviora-api', database });
}
