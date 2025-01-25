let reservations = [
  {
    id: 1,
    user: "John Doe",
    hotel: "Hotel A",
    checkIn: "2025-01-01",
    checkOut: "2025-01-05",
    status: "Pending",
    roomType: "Suite",
    guests: 2,
  },
  {
    id: 2,
    user: "Jane Smith",
    hotel: "Hotel B",
    checkIn: "2025-01-10",
    checkOut: "2025-01-12",
    status: "Approved",
    roomType: "Double",
    guests: 3,
  },
];

export function getReservations() {
  return reservations;
}

export function addReservation(reservation) {
  const newReservation = { id: Date.now(), ...reservation, status: "Pending" };
  reservations.push(newReservation);
  return newReservation;
}

export function updateReservations(newReservations) {
  reservations.length = 0; 
  reservations.push(...newReservations); 
}