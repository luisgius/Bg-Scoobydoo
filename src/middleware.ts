import { NextResponse } from "next/server";

// Auth is temporarily disabled — all routes are public
export function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|fonts|images|leaflet).*)"],
};
