'use client'
import React, { useState, useEffect, useRef } from 'react';
import styles from './style.module.css'
import Link from 'next/link'
import { FaLanguage } from "react-icons/fa";

function LanguageSwitcher() {
    const [isClassChanged, setIsClassChanged] = useState(false);
    const container = useRef(null);

    const handleClick = () => {
        setIsClassChanged(!isClassChanged);
    }

    const handleDocumentClick = (event) => {
        if (container.current && !container.current.contains(event.target)) {
            setIsClassChanged(false);
        }
    }

    useEffect(() => {
        // Add click event listener to the document
        document.addEventListener('click', handleDocumentClick);

        // Clean up the event listener on component unmount
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    return (
        <div ref={container} onClick={handleClick} className={styles.container}>
            <button className={styles.menuButton}><FaLanguage size={32} style={{ fill: 'white' }} /></button>
            <ul className={!isClassChanged ? styles.languageList : styles.languagListOpen}>
                <li>
                    <Link className={styles.link} href='/en-US' prefetch={false}>A-English</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/en' prefetch={false}>English</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/in' prefetch={false}>हिन्दी भाषा/Hindi</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/de' prefetch={false}>Deutsch </Link>
                </li>

                <li>
                    <Link className={styles.link} href='/fr' prefetch={false}>Français</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/it' prefetch={false}>Italiana</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/es' prefetch={false}>Español</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/pt' prefetch={false}>Português</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/se' prefetch={false}>Svenska</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/fi' prefetch={false}>Suomi</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/dk' prefetch={false}>Dansk</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/no' prefetch={false}>Norsk</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/jp' prefetch={false}>日本語</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/ru' prefetch={false}>Русский</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/cz' prefetch={false}>Čeština</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/ee' prefetch={false}>Eesti</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/hu' prefetch={false}>Magyar</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/lv' prefetch={false}>Latviešu</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/nl' prefetch={false}>Dutch</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/pl' prefetch={false}>Polski</Link>
                </li>


                <li>
                    <Link className={styles.link} href='/ar' prefetch={false}>العربية</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/he' prefetch={false}>עברית</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/id' prefetch={false}>Indonesian</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/ko' prefetch={false}>한국어</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/ro' prefetch={false}>Română</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/sk' prefetch={false}>Slovenský</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/sl' prefetch={false}>Slovenski</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/th' prefetch={false}>ไทย</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/tr' prefetch={false}>Türkçe</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/uk' prefetch={false}>Українська</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/vi' prefetch={false}>Tiếng Việt</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/zh' prefetch={false}>汉语</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/el' prefetch={false}>Ελληνική</Link>
                </li>
            </ul>
        </div>
    )
}

export default LanguageSwitcher