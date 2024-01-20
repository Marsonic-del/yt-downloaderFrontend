//import type { Metadata } from 'next'
import { Roboto, } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"],
})

export const metadata = {
  title: 'Hollywood-downloader',
  description: 'Download youtube video',
}

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }, { locale: 'in' }, { locale: 'fr' }, { locale: 'it' }, { locale: 'es' }, { locale: 'pt' }, { locale: 'se' }, { locale: 'fi' }, { locale: 'dk' }, { locale: 'no' }, { locale: 'jp' }, { locale: 'ru' }, { locale: 'cz' }, { locale: 'ee' }, { locale: 'hu' }, { locale: 'lt' }, { locale: 'lv' }, { locale: 'nl' }, { locale: 'pl' },]
}

export default function LocaleLayout({ children, params }) {

  // const t = useTranslations('Index');
  // const buttonText = t('button');

  // if (params.locale !== locale) {
  //   notFound();
  // }
  return (
    <html lang={params.locale}>
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
