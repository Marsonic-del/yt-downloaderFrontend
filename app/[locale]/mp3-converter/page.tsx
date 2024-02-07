import styles from './styles.module.css'
import { Locale, getDictionary } from '../dictionaries';
import Mp3 from '@/components/Mp3Converter'

type Props = {
    params: {
      locale: Locale,
    }
  }
  
  export default async function Mp3Converter({ params: { locale } }: Props) {
    const intl = (await getDictionary(locale)).Index;
    return (
      <>
        <Mp3 intl={intl} />
      </>
    )
  }