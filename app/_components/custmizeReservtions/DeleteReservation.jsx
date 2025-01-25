"use client"
import React from 'react';
import { Trash2 } from 'lucide-react';
import { toast } from 'react-toastify';

const DeleteReservation = ({ ID }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/reservations/delete/${ID}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      toast.success("Deleted successfully!");
      window?.location.reload(); 
    } catch (error) {
      console.error("Error during deleteDataId:", error);
      toast.error("Error while deleting");
    }
  };

  return (
    <div onClick={handleDelete}>
      <Trash2 className="cursor-pointer" />
    </div>
  );
};

export default DeleteReservation;
