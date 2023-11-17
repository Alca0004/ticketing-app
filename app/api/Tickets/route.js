import Ticket from '@/app/(models)/Ticket';
import { NextResponse } from 'next/server';

export async function POST(req) {
  console.log('Post ran');
  try {
    const body = await req.json();
    const ticketData = body.formData;
    await Ticket.create(ticketData);
    return NextResponse.json({ message: 'Ticket Created' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const tickets = await Ticket.find();
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}
