import React from 'react'
import Image from 'next/image'
import styles from './style.module.css'
import { embedLink } from '../../app/lib/utils'

const Card = ({ header, image, alt, text, locale }) => {
    return (
        <article className={styles.container}>
            <div className={styles.headerbox}>
                <Image
                    src={image}
                    width={25}
                    height={25}
                    alt={alt}
                />
                <h3 className={styles.header}>{header}</h3>
            </div>
            <p className={styles.text} dangerouslySetInnerHTML={{ __html: embedLink(text, locale) }} />
        </article>
    )
}

export default Card