import React from 'react';
import styles from './style.module.css'
import { embedLink } from '../../app/lib/utils'



const ServiceDescription = ({ intl, locale }) => {
    return (
        <section className={styles.serviceDescription}>
            <h1 className={styles.serviceDescription_header}>YouTube Video Downloader</h1>
            <p className={styles.description} dangerouslySetInnerHTML={{ __html: embedLink(intl.serviceDesc, locale) }} />
        </section>
    );
};

export default ServiceDescription;
