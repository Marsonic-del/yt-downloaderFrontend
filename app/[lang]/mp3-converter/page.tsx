import styles from './styles.module.css'
import { Locale, getDictionary } from '../dictionaries';
import Mp3 from '@/components/Mp3Converter'

type Props = {
    params: {
      lang: Locale,
    }
  }
  
  export default async function Mp3Converter({ params: { lang } }: Props) {
    const intl = (await getDictionary(lang)).Index;
    return (
      <>
        <Mp3 intl={intl} />
      </>
    )
  }