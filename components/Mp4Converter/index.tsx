import React from 'react'
import styles from './styles.module.css'
import MainContent from '../mainContent'


const Mp4Converter = ({ intl }:{intl: any}) => {
  return (
    <section className={styles.container}>
        <h1 className={styles.header}>{intl.mp4Header}</h1>
        <ul className={styles.list}>
            {intl.mp4Text.map((e: any, i: number) => (
                <li key={i}><p>{e}</p></li>
        ))}
        </ul>
        
        <MainContent intl={intl} header={intl.insrtuctionsMp4Header}/>
    </section>
  )
}

export default Mp4Converter