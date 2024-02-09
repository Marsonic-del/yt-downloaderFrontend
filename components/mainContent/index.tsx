import React from 'react'
import style from './style.module.css'
import Image from 'next/image'
import copyImageLarge from '../../public/copy-650px.png'
import pasteImage from '../../public/paste-654px.png'
import downloadImage from '../../public/download-657px.png'

type Props = {
  intl: {
    instructions: string[];
    insrtuctionsHeader: string;
    prosHeader: string;
    pros: string[];
    instructionsImageCopy: string;
    instructionsImagePaste: string;
    instructionsImageDownload: string;
  },
  header: string;

}

const MainContent = ({ intl, header }: Props) => {
  return (
    <section className={style.section}>     
        <h2 className={style.header}>{header}</h2>
        <ul className={style.list}>
          <li className={style.card}>
            <p  className={style.paragraph}>{intl.instructions[0]}</p>
            <Image
              src={copyImageLarge}
              alt={intl.instructionsImageCopy}
              sizes="(max-width: 768px) 330px,
                        (max-width: 1200px) 507px,
                        657px"
              className={style.image}
               />
          </li>
          <li className={style.card}>
            <p  className={style.paragraph}>{intl.instructions[1]}</p>
            <Image
              src={pasteImage}
              alt={intl.instructionsImagePaste}
              sizes="(max-width: 768px) 330px,
                        (max-width: 1200px) 507px,
                        657px"
              className={style.image}
               />
          </li>
          <li className={style.card}>
            <p  className={style.paragraph}>{intl.instructions[2]}</p>
            <Image
              src={downloadImage}
              alt={intl.instructionsImageDownload}
              className={style.image}
              sizes="(max-width: 768px) 330px,
                        (max-width: 1200px) 507px,
                        657px"
               />
          </li>
        </ul>    
    </section>
  )
}

export default MainContent