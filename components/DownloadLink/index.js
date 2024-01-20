'use client'

import styles from './style.module.css'
import { FaDownload } from "react-icons/fa";
import { useTranslations } from 'next-intl';


const DownloadLink = ({ intl, onClick, video }) => {
    //const t = useTranslations('Index');
    return (
        <div className={styles.container}>
            <p className={styles.quality}><span>{video.format_note}</span>.{video.ext}</p>
            <a className={styles.button} onClick={(video) => onClick(video.url)} href={video.url}>{intl.downloadButton} <FaDownload /></a>
        </div>
    )
}

export default DownloadLink