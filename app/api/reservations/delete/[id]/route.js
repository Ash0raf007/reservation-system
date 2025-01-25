import { getReservations, updateReservations } from "@/lib/reservationsStore";

export async function DELETE(req, { params }) {
  try {
    const { id } = params; 

    if (!id) {
      return new Response(JSON.stringify({ message: "Reservation ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const reservations = getReservations();
    const initialLength = reservations.length;

    const updatedReservations = reservations.filter(
      (reservation) => reservation.id !== parseInt(id, 10)
    );

    if (updatedReservations.length < initialLength) {
      updateReservations(updatedReservations);
      return new Response(JSON.stringify({ message: "Reservation successfully deleted" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }else {
      return new Response(JSON.stringify({ message: "Reservation not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error("Error processing DELETE request:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
