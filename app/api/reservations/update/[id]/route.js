import { getReservations, updateReservations } from '@/lib/reservationsStore';
import { NextResponse } from 'next/server';

export async function PATCH(request, { params }) {
  try {
    const { id } = params;
    const reservationId = parseInt(id);

    if (isNaN(reservationId)) {
      return NextResponse.json({ message: "Invalid reservation ID" }, { status: 400 });
    }

    const updates = await request.json();

    const reservations = getReservations();

    const index = reservations.findIndex((res) => res.id === reservationId);

    if (index === -1) {
      return NextResponse.json({ message: "Reservation not found" }, { status: 404 });
    }

    reservations[index] = { ...reservations[index], ...updates };
    updateReservations(reservations);

    return NextResponse.json(reservations[index], { status: 200 });
  } catch (error) {
    console.error("Error updating reservation:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
