import Main from '../../components/main'
import { Locale, getDictionary } from './dictionaries';

type Props = {
  params: {
    lang: Locale,
  }
}

export default async function Home({ params: { lang } }: Props) {
  const intl = await getDictionary(lang);
  return (
    <>
      <Main intl={intl.Index} locale={lang} />
    </>
  )
}
