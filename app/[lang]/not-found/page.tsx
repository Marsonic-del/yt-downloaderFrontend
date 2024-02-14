import Link from 'next/link'
import styles from './styles.module.css'
 
export default function NotFound() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Not Found</h2>
      <p className={styles.errorCode}>404</p>
      <p className={styles.text}>Could not find requested resource</p>
      <Link className={styles.link} href="/">Return Home</Link>
    </div>
  )
}