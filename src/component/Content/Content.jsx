import React from 'react'
import style from './Content.module.css'
const Content = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.bannerContainer}>
        <div className={style.bannerTextContainer}>
          <div className={style.bannerTitle}>
            <p>Experience the allure of Adlor!</p>
          </div>
          <div className={style.bannerSubTitle}>
            <p>Get exciting offers on all products</p>
          </div>
          <div className={style.bannerButton}>
            <button className='btn-light'>SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
