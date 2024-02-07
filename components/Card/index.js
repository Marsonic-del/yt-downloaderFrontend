import React from 'react'
import Image from 'next/image'
import styles from './style.module.css'

const Card = ({ header, image, alt, text }) => {
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
            <p className={styles.text}>{text}</p>
        </article>
    )
}

export default Card