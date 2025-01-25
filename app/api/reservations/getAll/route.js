
import { getReservations } from "@/lib/reservationsStore";

export async function GET(req) {
  const reservations = getReservations();
  return new Response(JSON.stringify(reservations), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
