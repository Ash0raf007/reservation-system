"use client";
import { X } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Input from '../Input';
import Button from '../Button';
import { editReservat } from '@/lib/axios';
function PopUpEdit({ open, onClose, children,ID}) {
      const [formData, setFormData] = useState({
        "hotel": "Hotel A", 
        "checkIn": "",
        "checkOut": "",
        "guests": 1,
        "roomType": "Single", 
      });
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await editReservat(ID, formData); 
          toast.success("Data changed successfully!");
          onClose(); 
          console.log(response);
        } catch (error) {
          console.error("Error updating reservation:", error);
          toast.error("Error updating reservation");
        }
      };
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-[#C8CACC] bg-opacity-55" : "invisible"
      }`}
      style={{ position: 'fixed', top: 0, left: 0 ,bottom:0 ,right:0, zIndex: 9999 }}

    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-[#F6FAFF] rounded-xl shadow p-6 transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        {children}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg outline-none border-none bg-transparent"
        >
          <X className="text-black" />
        </button>
      
        <p className="font-medium leading-normal capitalize">
        Edit Your Reservation
                </p>
      
      <div>
      <div className="px-[10px] md:px-[120px]">
    <form onSubmit={handleSubmit} className='flex flex-col gap-[20px] max-w-[900px]'>
      <h2 className="text-green-400 mt-[30px] mb-[20px]">Make a Reservation</h2>
      <label>
        Hotel:
        <select
        required
        name="hotel" value={formData.hotel} onChange={handleChange} >
          <option value="Hotel A">Hotel A</option>
          <option value="Hotel B">Hotel B</option>
        </select>
      </label>
      <label>
        Check-In Date:
        <Input
        required
        type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} />
      </label>
      <label>
        Check-Out Date:
        <Input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} />
      </label>
      <label>
        Guests:
        <Input
        required
          type="number"
          name="guests"
          value={formData.guests}
          min="1"
          onChange={handleChange}
        />
      </label>
      <label>
        Room Type:
        <select 
        required
        name="roomType" value={formData.roomType} onChange={handleChange}>
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          <option value="Suite">Suite</option>
        </select>
      </label>
      <Button type="submit" name="Submit" className="bg-yellow-300 px-[35px] py-[12px] rounded-xl mt-[20px]"/>
      <Button
            name="Cancel"
            onClick={onClose}
            className="rounded border-2 border-[#0065CD] text-[#0065CD] capitalize text-[15px] px-[35px] py-[12px] bg-transparent"
          />
    
    </form>
    </div>
          </div>
      
      
  
      </div>
    </div>
  );
}

export default PopUpEdit;
