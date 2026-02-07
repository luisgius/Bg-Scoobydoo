import { NextRequest, NextResponse } from "next/server";

// Auth is temporarily disabled — all routes are public
export async function middleware(req: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|fonts|images|leaflet).*)"],
};
