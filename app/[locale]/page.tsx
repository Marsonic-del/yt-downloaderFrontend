import Main from '../../components/main'
import Header from '../../components/header'
import { Locale, getDictionary } from './dictionaries';

export const runtime = 'edge'


type Props = {
  params: {
    locale: Locale,
  }
}

export default async function Home({ params: { locale } }: Props) {
  const intl = await getDictionary(locale);
  return (
   
    <>
      <Header/>
      <Main intl={intl.Index} />
    </>
  )
}
