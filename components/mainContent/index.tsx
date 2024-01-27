import React from 'react'
import style from './style.module.css'

const MainContent: React.FC<{ intl: { content: string[] } }> = ({ intl }) => {
  return (
    <section className={style.section}>
        {intl.content.map((element, index) => {
            return <p key={index} className={style.paragraph}>{element}</p>
        })}
    </section>
  )
}

export default MainContent