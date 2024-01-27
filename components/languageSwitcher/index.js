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
                    <Link className={styles.link} href='/en' prefetch={false}>English</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/in' prefetch={false}>Hindi</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/de' prefetch={false}>German</Link>
                </li>

                <li>
                    <Link className={styles.link} href='/fr' prefetch={false}>French</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/it' prefetch={false}>Italian</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/es' prefetch={false}>Spanish</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/pt' prefetch={false}>Portuguese</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/se' prefetch={false}>Swedish</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/fi' prefetch={false}>Finnish</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/dk' prefetch={false}>Danish</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/no' prefetch={false}>Norwegian</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/jp' prefetch={false}>Japanese</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/ru' prefetch={false}>Russian</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/cz' prefetch={false}>Czech</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/ee' prefetch={false}>Estonian</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/hu' prefetch={false}>Hungarian</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/lv' prefetch={false}>Latvian</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/nl' prefetch={false}>Dutch</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/pl' prefetch={false}>Polish</Link>
                </li>
            </ul>
        </div>
    )
}

export default LanguageSwitcher