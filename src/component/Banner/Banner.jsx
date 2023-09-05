import React from 'react'
import style from './Banner.module.css'
const Banner = () => {
    return (
        <>
            <div className={style.bannerImageContainer}>
                <img src="/banner2.jpg" alt="" srcset="" />
            </div>
            <div className={style.bannerContainer}>
                <div className={style.bannerSecondImage}>
                    <img className='img img-flui' src="/logo2.png" alt="" />
                </div>
                <div className={style.bannerImageDescription}>
                    <p>
                        Adlor is a distinctive mens and kids clothing brand that embraces style, quality, and comfort. With a keen focus on contemporary fashion, Adlor designs and creates clothing that caters to the modern man and the fashion-forward young ones.At Adlor, we believe that clothing is more than just a means to cover the body; it is a form of self-expression. Our brand is built on the philosophy that every individual should have the freedom to showcase their unique personality through their clothing choices. We strive to empower men and children to embrace their individuality and make a bold statement with their fashion.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Banner
