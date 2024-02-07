//import type { Metadata } from 'next'
import { Roboto, } from 'next/font/google'
import './globals.css'
// import { getDictionary } from './dictionaries';
import Header from '../../components/header'
import { getDictionary } from './dictionaries';
import Footer from '../../components/footer'
import Form from '@/components/form'
import styles from './styles.module.css'
import FormSection from '@/components/FormSection';

export const viewport = {
  themeColor: '#220066',
  colorScheme: 'light',
}

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
      'cs-CZ': '/cz',
      'da-DK': '/dk',
      'es-ES': '/es',
      'fi-FI': '/fi',
      'fr-FR': '/fr',
      'it-iT': '/it',
      'ja-JP': '/jp',
      'nl-NL': '/nl',
      'no-NO': '/no',
      'pl-PL': '/pl',
      'pt-PT': '/pt',
      'pt-BR': '/pt',
      'ru-RU': '/ru',
      'sv-SE': '/se',
      'et-EE': '/ee',
      'hu-HU': '/hu',
      'hi-IN': '/in',
      'hi-NP': '/in',
      'hi-FJ': '/in',
      'lt-LT': '/lt',
      'lv-LV': '/lv',
      'lv-LV': '/lv',
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
        <Header intl={intl.Index} locale={params.locale} />
        <FormSection intl={intl.Index} />
        {children}
        <Footer intl={intl.Index} />

      </body>
    </html>
  );
}
