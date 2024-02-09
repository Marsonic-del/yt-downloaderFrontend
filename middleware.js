// import createMiddleware from 'next-intl/middleware';
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

// export default createMiddleware({
//     // A list of all locales that are supported
//     locales: ['en', 'ru', 'hu', 'pl', 'cz', 'de', 'fr', 'it', 'es', 'pt', 'dk', 'no', 'fi', 'se', 'nl', 'lv', 'lt', 'ee',],

//     // Used when no locale matches
//     defaultLocale: 'en'
// });

// export const config = {
//     // Match only internationalized pathnames
//     matcher: ['/', '/(ru|en|hu|pl|cz|de|fr|it|es|pt|dk|no|fi|se|nl|lv|lt|ee)/:path*']
// };



let defaultLocale = 'en'
let locales = ['en', 'ru', 'hu', 'pl', 'cz', 'de', 'fr', 'it', 'es', 'pt', 'dk', 'no', 'fi', 'se', 'nl', 'lv', 'lt', 'ee', 'in', 'jp', 'en-US', 'en-GB', 'ar', 'bg', 'el', 'he', 'id', 'ko', 'ro', 'sk', 'sl', 'th', 'tr', 'uk', 'vi', 'zh', 'zh-CN', 'zh-SG', 'zh-TW', 'zh-HK']

// Get the preferred locale, similar to the above or using a library
function getLocale(request) {
    const acceptedHeaders = request.headers.get('accept-language') ?? undefined
    let headers = { 'accept-language': acceptedHeaders }
    let languages = new Negotiator({ headers }).languages()
    return match(languages, locales, defaultLocale)
}

export function middleware(request) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return
    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return Response.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next).*)',
        // Optional: only run on root (/) URL
        // '/'
    ],
}