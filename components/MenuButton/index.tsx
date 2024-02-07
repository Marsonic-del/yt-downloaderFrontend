"use client"
import React, {useState, useEffect} from 'react'
import style from './style.module.css'
import Link from 'next/link'

const MenuButton = ({locale}:{locale:string}) => {
    const [toggle, setToggle] = useState(false);
  return (
    <div className={style.container}>
        <div onClick={() => setToggle(!toggle)} className={style.button}>
            <div className={style.line}></div>
        </div>
        <nav itemScope itemType="http://schema.org/SiteNavigationElement" className={`${style.navbar}  `}>
                <ul className={`${style.navlist} ${toggle &&  style.toggled}`}>
                <li itemProp="name">
                        <Link href={`/${locale}`} className={style.link}>Home</Link>
                    </li>
                    <li itemProp="name">
                        <Link href={`/${locale}/youtube-shorts`} className={style.link}>YouTube Shorts</Link>
                    </li>
                    <li itemProp="name">
                        <Link href={`/${locale}/mp3-converter`} className={style.link}>YouTube to MP3</Link>
                    </li>
                    <li itemProp="name">
                        <Link href={`/${locale}/mp4-converter`} className={style.link}>YouTube to MP4</Link>
                    </li>
                </ul>
            </nav>
    </div>
    
    
  )
}

export default MenuButton