import styles from './styles.module.css'
import { Locale, getDictionary } from '../dictionaries';
import Mp4 from '@/components/Mp4Converter'

type Props = {
    params: {
      locale: Locale,
    }
  }
  
  export default async function Mp4Converter({ params: { locale } }: Props) {
    const intl = (await getDictionary(locale)).Index;
    return (
      <>
        <Mp4 intl={intl} />
      </>
    )
  }