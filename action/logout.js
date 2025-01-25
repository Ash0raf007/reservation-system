'use server'
import { cookies } from "next/headers"

export const logoutAction = async () => {
  let redirectPath;

  try {
  cookies().delete('token')
  cookies().delete('role')
    
      redirectPath = '/auth/login'
  } catch (error) {
    console.log(error,"error debug")
      return {
        error
      }
  } finally {
      if (redirectPath) {
          return {
            path: redirectPath,
            message: 'Logged out successfully'
          }
      }
  }
} 