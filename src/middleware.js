import { NextResponse } from "next/server";

import { fetchRegions } from "./utils/regions";

export async function middleware(request) {
  const url = request.nextUrl.clone();
  const { pathname } = url;

  const regions = await fetchRegions();
  const regionList = Object.keys(regions);

  const isRegionPresent = regionList.some((region) =>
    pathname.startsWith("/" + region),
  );

  if (
    pathname.startsWith("/fonts") ||
    pathname.match(/^\/[^/]+\.(svg|png|jpg|jpeg|gif|ico|css|js)$/i)
  ) {
    return NextResponse.next();
  }

  if (!isRegionPresent) {
    const defaultRegion = "ae";
    url.pathname = "/" + defaultRegion + pathname;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
