export default function handler(req, res) {
  if (req.method === "PATCH") {
    const { id } = req.query;
    const index = reservations.findIndex((res) => res.id === parseInt(id));
    if (index !== -1) {
      reservations[index] = { ...reservations[index], ...req.body };
      updateReservations(reservations); // Update the reservations array
      res.status(200).json(reservations[index]);
    } else {
      res.status(404).json({ message: "Reservation not found" });
    }
  } else {
    res.setHeader("Allow", ["PATCH"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
