import styles from './styles.module.css'
import { Locale, getDictionary } from '../dictionaries';
import Shorts from '@/components/Shorts'

type Props = {
    params: {
      lang: Locale,
    }
  }
  
  export default async function ShortsPage({ params: { lang } }: Props) {
    const intl = (await getDictionary(lang)).Index;
    return (
      <>
        <Shorts intl={intl} />
      </>
    )
  }