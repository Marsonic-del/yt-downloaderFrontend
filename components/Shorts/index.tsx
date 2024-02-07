import React from 'react'
import styles from './styles.module.css'
import MainContent from '../mainContent'


const Shorts = ({ intl, }:{intl: any}) => {
  return (
    <section className={styles.container}>
        <h1 className={styles.header}>{intl.shortsHeader}</h1>
        <ul className={styles.list}>
            {intl.shortsText.map((e: any, i: number) => (
                <li key={i}><p>{e}</p></li>
        ))}
        </ul>
        
        <MainContent intl={intl} header={intl.insrtuctionsShortHeader}/>
    </section>
  )
}

export default Shorts