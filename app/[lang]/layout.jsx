//import type { Metadata } from 'next'
import { Roboto, } from 'next/font/google'
import './globals.css'
// import { getDictionary } from './dictionaries';
import Header from '../../components/header'
import { getDictionary } from './dictionaries';
import Footer from '../../components/footer'
import FormSection from '@/components/FormSection';
import { locales, defaultLocale } from '@/app/lib/constants'

export const viewport = {
  themeColor: '#220066',
  colorScheme: 'light',
}

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"],
})

export const metadata = {
  metadataBase: new URL('https://hollywooddownloader.com'),
  alternates: {
    canonical: '/en',
    languages: {
      'en-US': '/en-US',
      'en-GB': '/en-GB',
      // 'en': '/en',
      'zh-CN': '/zh-CN',
      'zh-SG': '/zh-SG',
      'zh-TW': '/zh-TW',
      'zh-HK': '/zh-HK',
      'de': '/de',
      'cs': '/cz',
      'da': '/dk',
      'es': '/es',
      'fi': '/fi',
      'fr': '/fr',
      'it': '/it',
      'ja': '/jp',
      'nl': '/nl',
      'no': '/no',
      'pl': '/pl',
      'pt': '/pt',
      'pt': '/pt',
      'ru': '/ru',
      'sv': '/se',
      'et': '/ee',
      'hu': '/hu',
      'hi': '/in',
      'lt': '/lt',
      'lv': '/lv',
      'ar': '/ar',
      'bg': '/bg',
      'el': '/el',
      'he': '/he',
      'id': '/id',
      'ko': '/ko',
      'ro': '/ro',
      'sk': '/sk',
      'sl': '/sl',
      'th': '/th',
      'tr': '/tr',
      'uk': '/uk',
      'vi': '/vi',
      'zh': '/zh',
    },
  },
  keywords: ['YouTube video download for free', 'download videos for free', 'HollywoodDownloader'],
  title: 'Download YouTube Videos - HollywoodDownloader.com',
  description: 'Easily download YouTube videos with HollywoodDownloader.com. Paste the video link, click download, and enjoy your favorite content offline. Fast and user-friendly!',
  openGraph: {
    title: 'Download YouTube Videos - HollywoodDownloader.com',
    description: 'Easily download YouTube videos with HollywoodDownloader.com. Paste the video link, click download, and enjoy your favorite content offline. Fast and user-friendly!',
    url: 'https://hollywooddownloader.com',
    siteName: 'HollywoodDownloader',
    //images: [],               put images
    locale: 'en',
    type: 'website',
  }
}

export default async function LocaleLayout(props) {
  const { children, params } = props;
  if (!locales.includes(params.lang)) {
    params.lang = defaultLocale
  }

  const intl = await getDictionary(params.lang);
  metadata.title = intl.Index.title;
  metadata.description = intl.Index.description;
  metadata.openGraph.title = intl.Index.ogTitle;
  metadata.openGraph.description = intl.Index.ogDescription;
  metadata.openGraph.locale = params.lang;

  return (
    <html lang={params.lang}>
      <body className={roboto.className}>
        <Header intl={intl.Index} locale={params.lang} />
        <FormSection intl={intl.Index} />
        {children}
        <Footer intl={intl.Index} />
      </body>
    </html>
  );
}
