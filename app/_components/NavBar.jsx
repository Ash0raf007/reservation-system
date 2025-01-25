"use server"
import React from 'react';
import { cookies } from 'next/headers';
import Logout from './logout/Logout';

const NavBar = async () => {
  const cookieStore = await cookies()
  const token = cookieStore?.get('token')?.value;
  const role = cookieStore?.get('role')?.value;

  return (
    <div>
      {token && (
        <div className="flex justify-between mx-[10px] p-[20px] md:mx-[150px] mt-[20px] border-solid border-2">
          <p>Hello {role} 👋</p>
          <Logout />
        </div>
      )}
    </div>
  );
};

export default NavBar;
