import { NextResponse } from "next/server";

export default function middleware(req) {
  const isAuth = req.cookies.get("token");
  const role=req.cookies.get("role")
  const url = req.url;
  

  if ((!isAuth) && 
  (url.includes("/admin/dashboard") || url.includes("/user/make-reservation")))
  {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
  const requestHeaders = new Headers(req.headers)

  requestHeaders.set('Authorization', `Bearer ${isAuth}`)

  if (
    isAuth && 
      url.includes("/auth/login")) 
   {
    if(role==="admin")
    return NextResponse.redirect(new URL("/admin/dashboard", req.url));
  else if(role==="user")
    return NextResponse.redirect(new URL("/user/make-reservation", req.url));
  }
}

