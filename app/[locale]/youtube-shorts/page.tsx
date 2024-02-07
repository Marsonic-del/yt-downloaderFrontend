import styles from './styles.module.css'
import { Locale, getDictionary } from '../dictionaries';
import Shorts from '@/components/Shorts'

type Props = {
    params: {
      locale: Locale,
    }
  }
  
  export default async function ShortsPage({ params: { locale } }: Props) {
    const intl = (await getDictionary(locale)).Index;
    return (
      <>
        <Shorts intl={intl} />
      </>
    )
  }