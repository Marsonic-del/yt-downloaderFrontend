import Link from 'next/link'
import React from 'react'
import style from './style.module.css'

const Footer = ({ intl, locale }) => {
    console.log('locale: ', locale)
    return (
        <footer className={style.footer}>
            <nav itemScope itemType="http://schema.org/SiteNavigationElement" className={style.nav}>
                <ul className={style.navlist}>
                    <li itemProp="name">
                        <Link className={style.link} href={`/${locale}/terms-of-use`} >Terms Of Use</Link>
                    </li>
                    <li itemProp="name">
                        <Link className={style.link} href={`/${locale}/privacy-policy`}>Privacy Policy</Link>
                    </li>
                    <li itemProp="name">
                        <Link className={style.link} href={`/${locale}/contact-us`} >Contact Us</Link>
                    </li>
                </ul>
            </nav>
            <p className={style.date}>&copy; HollywoodDownloader 2024</p>
        </footer>

    )
}

export default Footer