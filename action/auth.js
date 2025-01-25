'use server'
import { loginCredential } from "@/lib/axios";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export const signInAction = async (formData) => {
  const username = formData.get('username');
  const password = formData.get('password');

  let redirectPath, token,role;

  try {
    const user = await loginCredential({ username, password });
    console.log("User response:", user);

    if (!user?.data?.token) {
      throw new Error("User not found");
    }
    const decoded = jwtDecode(user?.data?.token);
    console.log(decoded,"sdssdsd")

    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      maxAge: 60 * 60 * 24 * 7,
      sameSite: 'strict',
      path: '/',
    };


      const cookieStore = await cookies()
    
  cookieStore?.set('token', user?.data?.token, cookieOptions);
  cookieStore?.set('role', user?.data?.role);
  cookieStore?.set('userId', decoded?.user_id);
    token = user?.data?.token;
    role=user.data.role
    redirectPath = role==="admin" ? "/admin/dashboard":"/user/make-reservation";

  } catch (error) {
    console.log("Login error:", error);

    let errorMessage;

    if (error.response) {
      errorMessage = error.response?.data?.error || "An error occurred during login.";
    } else if (error.request) {
      errorMessage = 'No response from the server. Please try again later.';
    } else {
      errorMessage = error.message || 'An unexpected error occurred.';
    }
    return { error: errorMessage };
  } finally {
    if (redirectPath && token) {
      return {
        path: redirectPath,
        token,
      };
    }
  }
};





