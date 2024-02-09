import styles from './styles.module.css'
import { Locale, getDictionary } from '../dictionaries';
import Mp4 from '@/components/Mp4Converter'

type Props = {
    params: {
      lang: Locale,
    }
  }
  
  export default async function Mp4Converter({ params: { lang } }: Props) {
    const intl = (await getDictionary(lang)).Index;
    return (
      <>
        <Mp4 intl={intl} />
      </>
    )
  }