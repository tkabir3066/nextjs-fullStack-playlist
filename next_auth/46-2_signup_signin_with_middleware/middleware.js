/* export default auth({
  // Options for route protection
  callbacks: {
    authorized: ({ token }) => !!token, // Only allow if token exists
  },
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  //   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  matcher: ["/dashboard"],
}; */

import { auth } from "@/app/auth";

export default auth(async function middleware(req) {
  const isLoggedIn = !!req.auth;
  const nextUrl = req.nextUrl;
  if (nextUrl.pathname === "/login") {
    return null;
  }
  if (!isLoggedIn && nextUrl.pathname !== "/login") {
    return Response.redirect(new URL("/login", nextUrl));
  }
});

//for all routes
// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };

//for specific route

export const config = {
  matcher: ["/dashboard"],
};
