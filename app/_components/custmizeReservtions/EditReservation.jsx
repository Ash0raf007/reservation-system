"use client"
import React from 'react'
import { useState} from "react";
import PopUpEdit from './PopUpEdit';
import { Pen } from 'lucide-react';

const EditReservation = ({ID}) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button 
      onClick={() => setOpen(true)}
      className={`position-relative`}>
<Pen  className="cursor-pointer"/>
        </button>    

        <PopUpEdit ID={ID} open={open} onClose={() => setOpen(false)} >
        <div className="text-center text-black w-56">

</div>
        </PopUpEdit>
    </div>
  )
}

export default EditReservation
