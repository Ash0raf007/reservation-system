"use server"
import { getReservat } from '@/lib/axios';
import MakeReservation from '../../_components/MakeReservation';
import Link from 'next/link';
import EditReservation from '@/app/_components/custmizeReservtions/EditReservation';

const page = async () => {
  const res = await getReservat();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Reservations</h1>
      <div className="space-y-4">
        {res.data.map((reservation) => (
          <div
            key={reservation.id}
            className="flex justify-between bg-white shadow-md rounded-lg p-4 border border-gray-200"
          >
            <div>
            <h2 className="text-xl font-semibold text-gray-800">
            Reservation ID	 {reservation.id}
            </h2>
            <p className="text-gray-600">
              <span className="font-medium">Client name:</span> {reservation.user}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Hotel name:</span> {reservation.hotel}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Check in:</span> {reservation.checkIn}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Check out:</span> {reservation.checkOut}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Room Number:</span> {reservation.roomType}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Number of Guests :</span> {reservation.guests}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Reservation Status :</span> {reservation.status}
            </p>
            </div>
            <EditReservation ID={reservation.id}/>

          </div>
        ))}
      </div>
      <div className="mt-6">
        <Link
          href="/user/make-reservation"
          className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg shadow-md transition duration-200"
        >
          Click Here to Make Reservation
        </Link>
      </div>
    </div>
  );
};

export default page;
