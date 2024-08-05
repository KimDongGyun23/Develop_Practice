import { auth } from "./auth";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.redirect(
      new URL("http://localhost:3000/auth/login", request.url)
    );
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/main"],
};
