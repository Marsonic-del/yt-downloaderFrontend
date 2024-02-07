import React from 'react'
import styles from './styles.module.css'
import MainContent from '../mainContent'


const Mp3Converter = ({ intl }:{intl: any}) => {
  return (
    <section className={styles.container}>
        <h1 className={styles.header}>{intl.mp3Header}</h1>
        <ul className={styles.list}>
            {intl.mp3Text.map((e: any, i: number) => (
                <li key={i}><p>{e}</p></li>
        ))}
        </ul>
        
        <MainContent intl={intl} header={intl.insrtuctionsMp3Header}/>
    </section>
  )
}

export default Mp3Converter