"use client";
import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { toast } from "react-toastify";
import Link from "next/link";

const MakeReservation = () => {
  const [formData, setFormData] = useState({
    hotel: "Hotel A", 
    checkIn: "",
    checkOut: "",
    guests: 1,
    roomType: "Single", 
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/reservations/create', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to create reservation');
      }

      const data = await response.json();
      toast.success("Reservation created successfully!");
      console.log(data);
    } catch (error) {
      console.log("error ahaaaaaaa", error);
      toast.error("Error creating reservation");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="px-4 md:px-20 lg:px-40 py-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-xl mx-auto">
        <h2 className="text-3xl text-green-500 text-center mb-6">Make a Reservation</h2>
        <label className="flex flex-col gap-2">
          Hotel:
          <select
            required
            name="hotel"
            value={formData.hotel}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-lg"
          >
            <option value="Hotel A">Hotel A</option>
            <option value="Hotel B">Hotel B</option>
            <option value="Hotel C">Hotel C</option>
          </select>
        </label>
        <label className="flex flex-col gap-2">
          Check-In Date:
          <Input
            required
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-lg"
          />
        </label>
        <label className="flex flex-col gap-2">
          Check-Out Date:
          <Input
            required
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-lg"
          />
        </label>
        <label className="flex flex-col gap-2">
          Guests:
          <Input
            required
            type="number"
            name="guests"
            value={formData.guests}
            min="1"
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-lg"
          />
        </label>
        <label className="flex flex-col gap-2">
          Room Type:
          <select
            required
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-lg"
          >
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Suite">Suite</option>
          </select>
        </label>
        <Button type="submit" name="Submit" className="bg-yellow-300 w-full md:w-1/3 rounded-xl py-2 mt-4 mx-auto" />
      </form>
      <div className="mt-8 text-center">
        <Link href="/user/reservation" className="text-blue-400 underline hover:text-blue-600">
          Click Here to Show Reservations
        </Link>
      </div>
    </div>
  );
};

export default MakeReservation;
