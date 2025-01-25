"use server"
import DeleteReservation from '@/app/_components/custmizeReservtions/DeleteReservation';
import EditReservation from '@/app/_components/custmizeReservtions/EditReservation';
import { getReservat } from '@/lib/axios';
import Link from 'next/link';

const page = async () => {
  const res = await getReservat();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Reservations</h1>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Reservation ID</th>
              <th className="border border-gray-300 px-4 py-2 text-left">User</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Hotel</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Room Type</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Number of Guests</th>
            </tr>
          </thead>
          <tbody>
            {res.data.map((reservation) => (
              <tr key={reservation.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{reservation.id}</td>
                <td className="border border-gray-300 px-4 py-2">{reservation.user}</td>
                <td className="border border-gray-300 px-4 py-2">{reservation.hotel}</td>
                <td className="border border-gray-300 px-4 py-2">{reservation.roomType}</td>
                <td className="border border-gray-300 px-4 py-2">{reservation.guests}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <DeleteReservation ID={reservation.id}/>
                </td>
                <td className="border border-gray-300 px-4 py-2">
<EditReservation ID={reservation.id}/>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <Link href="/user/make-reservation" className="text-blue-500 hover:underline">
        Click Here to Make Reservation
        </Link>
      </div>
    </div>
  );
};

export default page;
