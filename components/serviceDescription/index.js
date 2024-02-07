import React from 'react'
import styles from './style.module.css'

const ServiceDescription = ({ intl }) => {
    return (
        <section className={styles.serviceDescription}>
            <h1 className={styles.serviceDescription_header}>YouTube Video Downloader</h1>
            <p className={styles.description}>{intl.serviceDesc}</p>
        </section>
    )
}

export default ServiceDescription