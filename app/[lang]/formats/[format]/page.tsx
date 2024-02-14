import { redirect } from 'next/navigation'
import styles from './styles.module.css'
import { Locale, getDictionary } from '../../dictionaries';
import { BASE_URL } from '@/app/lib/constants';
import Format from '../../../../components/Format'

type Props = {
    params: {
      lang: Locale,
      format: Format,
    }
  }

type Format = 'mp3'|'mp4'|'mp4a'|'webm'|'3GP'
  
  export default async function Formats({ params: { lang, format } }: Props) {
      const intl = (await getDictionary(lang)).Index;
      const header = intl[`formatHeader${format}`]
      const text = intl[`formatText${format}`]

      if(!header || !text) {redirect(`${BASE_URL}/${lang}/not-found`)}
    
    return ( 
      <>
        <h2 className={styles.header}>Formats</h2>
        <Format header={header} text={text} />
      </>
    )
  }