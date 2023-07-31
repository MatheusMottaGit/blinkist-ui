import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  const signInUrl = new URL('/', request.url) //request.url === base url
  const homepage = new URL('/private/home', request.url)

  if (!token) {
    if (request.nextUrl.pathname === '/') {
      return NextResponse.next()
    }

    return NextResponse.redirect(signInUrl)
  }

  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(homepage)
  }
}

export const config = { //before rendering the page, the app will handle with routes that will be shown (thats why this property config)
  matcher: [
    '/',
    '/private/:path*'
  ]
}