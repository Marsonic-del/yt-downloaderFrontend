import styles from './styles.module.css'
import Link from 'next/link';

type Props = {
  header: string,
  text: string[]
}

const Format = ({header, text}:Props) => {
  return (
    <div className={styles.container}>
        <h3 className={styles.header}>{header}</h3>
        {text.map((str, index) => {
          return <p key={index} className={styles.text}>{str}</p>
        })}
    </div>
  )
}

export default Format;
