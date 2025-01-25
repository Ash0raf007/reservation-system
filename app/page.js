"use server"
import { axiosInstance } from '@/lib/axios';
import MakeReservation from './_components/MakeReservation';

const page = async () => {
  const res = await axiosInstance.get("/api/reservations/getAll");
  
return (
    <div>
{
  res.data.map((reservation) => (
    <div key={reservation.id}>
      <h2>Reservation {reservation.id}</h2>
      <p>Start Date: {reservation.user}</p>
      <p>End Date: {reservation.hotel}</p>
      <p>Number of Guests: {reservation.roomType}</p>
      <p>Room Number: {reservation.guests}</p>
      </div>
      ))
}
<MakeReservation/>
    </div>
  )
}

export default page