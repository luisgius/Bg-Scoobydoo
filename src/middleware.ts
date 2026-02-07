import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Public routes that don't need auth
  const publicRoutes = ["/login", "/api/auth"];
  const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route));

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const isLoggedIn = !!token;
  const isAdmin = token?.role === "ADMIN";

  if (isPublicRoute) {
    // Redirect logged-in users away from login page
    if (pathname.startsWith("/login") && isLoggedIn) {
      return NextResponse.redirect(new URL("/", req.nextUrl));
    }
    return NextResponse.next();
  }

  // All other routes require auth
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // Admin routes require admin role
  if (pathname.startsWith("/admin") && !isAdmin) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  // Admin API routes (POST/PUT/DELETE) require admin role
  if (pathname.startsWith("/api/") && !pathname.startsWith("/api/auth")) {
    const method = req.method;
    if (["POST", "PUT", "DELETE"].includes(method) && !isAdmin) {
      if (pathname.startsWith("/api/reminders") && method === "POST") {
        return NextResponse.next();
      }
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|fonts|images|leaflet).*)"],
};
