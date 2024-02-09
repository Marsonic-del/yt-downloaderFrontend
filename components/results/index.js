import styles from './style.module.css';
import DownloadLink from '../DownloadLink';
import { useState } from 'react';
import { downloadContent } from '../../lib/api';

const Results = ({ intl, results, setIsResult }) => {
    const [clicked, setClicked] = useState(false);
    //const t = useTranslations('Index');

    const handleClick = () => {
        setClicked(clicked => !clicked);
    }

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <img className={styles.image} src={results.thumb} alt={intl.altThumbnail} />
                <p className={styles.title}>{results.title}</p>
                <p className={styles.duration}>{intl.duration}: {results.duration}</p>
            </div>
            <div className={styles.links}>
                <h3 className={styles.quality}>{intl.quality}</h3>
                <ul className={styles.links__list}>
                    {results.fullvideos.map((video, index) => <li key={index}><DownloadLink intl={intl} onClick={downloadContent} video={video} /></li>).reverse()}
                </ul>

                {!clicked && <button className={styles.button} onClick={handleClick}>{intl.showButton}</button>}


                {clicked && <h2 className={styles.links__header}>{intl.audioOnly}</h2>}
                {clicked &&
                    <ul className={styles.links__list}>
                        {results.audioOnly.map((audio, index) => <li key={index}><DownloadLink intl={intl} onClick={downloadContent} video={audio} /></li>).reverse()}
                    </ul>
                }

                {clicked && <h2 className={styles.links__header}>{intl.videoOnly}</h2>}
                {clicked &&
                    <ul className={styles.links__list}>
                        {results.videoOnly.map((video, index) => <li key={index}><DownloadLink intl={intl} onClick={downloadContent} video={video} /></li>).reverse()}
                    </ul>
                }

                {clicked && <button className={styles.button} onClick={handleClick}>{intl.showLess}</button>}

            </div>
        </div>
    )
}

export default Results