import Link from 'next/link'
import React from 'react'
import style from './style.module.css'

const Footer = ({ intl }) => {
    return (
        <footer className={style.footer}>
            <nav className={style.nav}>
                <Link className={style.link} href='/terms-of-use'>Terms Of Use</Link>
                <Link className={style.link} href='/privacy-policy'>Privacy Policy</Link>
                <Link className={style.link} href='/contact-us'>Contact Us</Link>
            </nav>
            <p className={style.date}>&copy; HollywoodDownloader 2024</p>
        </footer>

    )
}

export default Footer