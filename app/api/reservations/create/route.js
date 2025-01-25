import { addReservation } from "@/lib/reservationsStore";

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.hotel || !body.checkIn || !body.checkOut || !body.guests || !body.roomType) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const newReservation = addReservation(body);
    return new Response(JSON.stringify(newReservation), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
