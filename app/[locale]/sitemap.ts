import { MetadataRoute } from 'next'
import { BASE_URL } from '@/app/lib/constants'

const locales = [{ locale: 'en' }, { locale: 'de' }, { locale: 'in' }, { locale: 'fr' }, { locale: 'it' }, { locale: 'es' }, { locale: 'pt' }, { locale: 'se' }, { locale: 'fi' }, { locale: 'dk' }, { locale: 'no' }, { locale: 'jp' }, { locale: 'ru' }, { locale: 'cz' }, { locale: 'ee' }, { locale: 'hu' }, { locale: 'lt' }, { locale: 'lv' }, { locale: 'nl' }, { locale: 'pl' },]
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
   
    return locales.map(({locale}) => ({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date('January 27, 2024 15:15:30'),
    }))
  }