import React from 'react'
import styles from './style.module.css'
import Card from '../Card'
import image_rocket from '../../public/rocket_rotate.png'
import image_multipleFormats from '../../public/formats.png'
import image_safe from '../../public/safe_2.png'
import imageYoutubeShorts from '../../public/youtubeShorts.png'
import imageCrossPlatform from '../../public/crossPlatformIcon.png'
import imagePriceFree from '../../public/priceFree.png'
import imageNoLimit from '../../public/noLimit.png'

const DescriptionBox = ({ intl, locale }) => {
    return (
        <section className={styles.info}>
            <h2 className={styles.header}>{intl.prosHeader}</h2>
            <div className={styles.container}>
                <Card header={intl.youtubeShortsHeader} text={intl.youtubeShorts} alt={intl.youtubeShortsAlt} image={imageYoutubeShorts} locale={locale} />

                <Card header={intl.highspeedHeader} text={intl.highspeed} alt={intl.highspeedAlt} image={image_rocket} locale={locale} />

                <Card header={intl.multiplatformHeader} text={intl.multiplatform} alt={intl.multiplatformAlt} image={imageCrossPlatform} locale={locale} />

                <Card header={intl.safeHeader} text={intl.safe} alt={intl.safeAlt} image={image_safe} locale={locale} />

                <Card header={intl.freeHeader} text={intl.free} alt={intl.freeAlt} image={imagePriceFree} locale={locale} />

                <Card header={intl.nolimitHeader} text={intl.nolimit} alt={intl.nolimitAlt} image={imageNoLimit} locale={locale} />

                <Card header={intl.multipleformatsHeader} text={intl.multipleformats} alt={intl.multipleformatsAlt} image={image_multipleFormats} locale={locale} />
            </div>

        </section>
    )
}

export default DescriptionBox