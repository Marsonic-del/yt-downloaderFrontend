import React from 'react';
import Link from 'next/link'
import styles from './style.module.css';
import LanguageSwitcher from '../languageSwitcher';
import MenuButton from '../MenuButton';


const Header = ({ intl, locale }) => {
    return (
        <header className={styles.header}>
            <MenuButton locale={locale} />
            <nav itemScope itemType="http://schema.org/SiteNavigationElement" className={styles.navbar}>
                <ul className={styles.navlist}>
                    <li itemProp="name">
                        <Link href={`/${locale}`} className={`${styles.link} ${styles.headerTitle}`}>HollywoodDownloader</Link>
                    </li>
                    <li itemProp="name">
                        <Link href={`/${locale}/youtube-shorts`} className={styles.link}>YouTube Shorts</Link>
                    </li>
                    <li itemProp="name">
                        <Link href={`/${locale}/mp3-converter`} className={styles.link}>YouTube to MP3</Link>
                    </li>
                    <li itemProp="name">
                        <Link href={`/${locale}/mp4-converter`} className={styles.link}>YouTube to MP4</Link>
                    </li>
                </ul>
            </nav>
            <LanguageSwitcher />
        </header>
    )
}

export default Header