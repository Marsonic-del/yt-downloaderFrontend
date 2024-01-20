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
                    <Link className={styles.link} href='/en'>English</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/in'>Hindi</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/de'>German</Link>
                </li>

                <li>
                    <Link className={styles.link} href='/fr'>French</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/it'>Italian</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/es'>Spanish</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/pt'>Portuguese</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/se'>Swedish</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/fi'>Finnish</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/dk'>Danish</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/no'>Norwegian</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/jp'>Japanese</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/ru'>Russian</Link>
                </li>
            </ul>
        </div>
    )
}

export default LanguageSwitcher