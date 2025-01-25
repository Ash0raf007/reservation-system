

"use server"


import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 50000,
})



export async function loginCredential({username, password}) {
  return await axiosInstance.post(
    `/api/credential/`,
    {
      username,
      password
    }
  );
}

export async function getReservat(){
  return await axiosInstance.get('/api/reservations/getAll')

} 

export async function makeReservat(formdata) {
  return await axiosInstance.post(
  `/api/reservations/create`,
    formdata
)
}

export async function deleteReservat({id}) {
    return await axiosInstance.delete(`/api/reservations/delete/${id}/`)
  }
  
  export async function editReservat(id,formdata) {
    return await axiosInstance.patch(`/api/reservations/update/${id}/`,
      formdata
    )    
  }
  