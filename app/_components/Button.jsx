"use client"
import React from 'react'



const Button = ({ name, onClick, className , type}) => {
  return (
    <button onClick={onClick} type={type} className={`${className}  cursor-pointer `}>
      {name}
    </button>
  )
}

export default Button