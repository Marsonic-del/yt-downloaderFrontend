//import type { Metadata } from 'next'
import { Roboto, } from 'next/font/google'
import './globals.css'
import { getDictionary } from './dictionaries';

export const runtime = 'edge'

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"],
})

export const metadata = {
  metadataBase: new URL('https://hollywooddownloader.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'de-DE': '/de',
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

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }, { locale: 'in' }, { locale: 'fr' }, { locale: 'it' }, { locale: 'es' }, { locale: 'pt' }, { locale: 'se' }, { locale: 'fi' }, { locale: 'dk' }, { locale: 'no' }, { locale: 'jp' }, { locale: 'ru' }, { locale: 'cz' }, { locale: 'ee' }, { locale: 'hu' }, { locale: 'lt' }, { locale: 'lv' }, { locale: 'nl' }, { locale: 'pl' },]
}

export default async function LocaleLayout(props) {
  const { children, params } = props;
  const intl = await getDictionary(params.locale);
  metadata.title = intl.Index.title;
  metadata.description = intl.Index.description;
  metadata.openGraph.title = intl.Index.ogTitle;
  metadata.openGraph.description = intl.Index.ogDescription;
  metadata.openGraph.locale = params.locale;

  return (
    <html lang={params.locale}>
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
