"use client"
import React from 'react';
import { deleteReservat } from '@/lib/axios';
import { Trash2 } from 'lucide-react';
import { toast } from 'react-toastify';

const DeleteReservation = ({ ID }) => {
  const handleDelete = async () => {
    try {
      const response = await deleteReservat({ID});
      console.log("Deletion successful:", response.data.message);

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
