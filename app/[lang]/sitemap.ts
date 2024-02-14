import { MetadataRoute } from 'next'
import { BASE_URL } from '@/app/lib/constants'

let locales = ['en', 'ru', 'hu', 'pl', 'cz', 'de', 'fr', 'it', 'es', 'pt', 'dk', 'no', 'fi', 'se', 'nl', 'lv', 'lt', 'ee', 'in', 'jp', 'en-US', 'en-GB', 'ar', 'bg', 'el', 'he', 'id', 'ko', 'ro', 'sk', 'sl', 'th', 'tr', 'uk', 'vi', 'zh', 'zh', 'zh-SG', 'zh-TW', 'zh-HK']

const routes =[ '', '/mp3-converter', '/mp4-converter', '/privacy-policy', '/terms-of-use', '/download-youtube-shorts', '/contact-us']
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrls =  locales.map((locale) => {
    return `${BASE_URL}/${locale}`
   })

   return baseUrls.flatMap(url => routes.map(route => ({
    url: `${url}${route}`,
    changeFrequency: 'weekly',
    lastModified: new Date('February 8, 2024 15:15:30'),
   })));
  }