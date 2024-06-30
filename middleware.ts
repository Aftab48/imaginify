import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const protectedRoute = createRouteMatcher([
  "/",
  "/credits",
  "/transformations(.*)",
]);

export default clerkMiddleware((auth, req) => {
  publicRoutes: ["/api/webhooks/clerk"];
  if (protectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
