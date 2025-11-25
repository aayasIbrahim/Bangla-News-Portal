import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// Environment variable for NextAuth secret
const secret = process.env.NEXTAUTH_SECRET;

export async function proxy(req: NextRequest) {
  // token fetch
  const token = await getToken({ req, secret });

  // token নাই → login page-এ redirect
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // role check
  if (token.role !== "admin") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // সব ঠিক → next
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*", 
    "/addnews/:path*",
    "/newslist/:path*",
    "/users/:path*",
  ],
};
