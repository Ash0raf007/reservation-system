"use client"
import React from 'react'
import Button from '../Button'
import { toast } from 'react-toastify';
import { logoutAction } from '@/action/logout';
import { useRouter } from "next/navigation";
const Logout = () => {

  const router = useRouter();
  const clientAction = async () => {
    const response = await logoutAction();
    router.push(response.path);
    toast.success("logout sucessfully")

    if (response.error) {
      toast.error(response.error);
    } else {
      router.push(response.path);
    }
  };
  return (
    <div>
      <form action={clientAction}>
        <Button
          name="Logout"
          type="submit"
          className={`'text-[#484848] font-medium' border-none bg-red-500 text-white rounded-xl p-[10px] text-sm outline-none`}
        />
      </form>
    </div>
  )
}

export default Logout