import React from 'react';
import style from './NavBar.module.css';
import { AiFillHome } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
const NavBar = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.navContainer}>
        <div className={style.logo}>
          <img src="/logo.png" className='img img-fluid' width={150} height={100} alt="logo" />
        </div>
        <div className={style.navList}>
          <div className={style.navListItem}>
            <a href="#"><AiFillHome style={{color:"black", width:'20px', height:'20px'}}/></a>
          </div>
          <div className={`${style.navListItem} ${style.navListCart}`}>
            <a href="#"><BsFillCartFill style={{ color: "black", width: '20px', height: '20px' }} /></a>
            <badge className= { style.cartBadge}>
              1
            </badge>
          </div>
          <div className={style.navListItem}>
            <a href="#"><BsPersonCircle style={{ color: "black", width: '20px', height: '20px' }} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
