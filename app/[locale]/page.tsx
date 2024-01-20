import Main from '../../components/main'
import Header from '../../components/header'
import { Locale, getDictionary } from './dictionaries';


type Props = {
  params: {
    locale: Locale,
  }
}

export default async function Home({ params: { locale } }: Props) {
  const intl = await getDictionary(locale);
  //const messages = useMessages();
  //console.log(messages)
  return (
    // <NextIntlClientProvider messages={intl}
    // >
    <>
      <Header/>
      <Main intl={intl.Index} />
    </>
    
  //  </NextIntlClientProvider>
  )
}
