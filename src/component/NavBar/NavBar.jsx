import React, { useEffect, useState } from 'react';
import style from './NavBar.module.css';
import { AiFillHome } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { changeShow} from '../../Redux/features/show';

const NavBar = () => {
  const show = useSelector(state => state.showSlider.show);
  const dispatch = useDispatch();
  const showSlider = () => {
    console.log("show slider is called..")
    dispatch(changeShow())
  } 
  return (
    <div className={style.mainContainer}>
      <div className={style.navContainer}>
        <div className={style.logo}>
          <img src="/logo.png" className='img img-fluid' alt="logo" width={120} height={40}/>
        </div>
        <div className={style.navList}>
          <div className={style.navListItem}>
            <a href="#"><AiFillHome style={{ color: "black", width: '20px', height: '20px' }} /></a>
          </div>
          <div className={`${style.navListItem} ${style.navListCart}`}>
            <a href="#"><BsFillCartFill style={{ color: "black", width: '20px', height: '20px' }} /></a>
            <badge className={style.cartBadge}>
              {1}
            </badge>
          </div>
          <div className={style.navListItem}>
            <a href="#"><BsPersonCircle style={{ color: "black", width: '20px', height: '20px' }} /></a>
          </div>
        </div>
        <div className={style.toggleMenu}>
          <div className={style.toggleMenuItem}
            onClick={showSlider}
          >
     
              <FiMenu id='menuIconHandburg' style={{ color: "black", width: '20px', height: '20px' }} />
          </div>
        </div>
      </div>
      {/* Off canvas section */}
      <div className={`${style.mainNavListContainer} ${show ? style.showMenu : ''}`}>
        <div className={style.toggleMenuList}>

          <div className={style.toggleMenuListItems}
          >
            <a ><AiFillHome /> Home</a>
          </div>
          <div className={style.toggleMenuListItems}>
            <a><BsFillCartFill /> Cart</a>
          </div>
          <div className={style.toggleMenuListItems}>
            <a > <BsPersonCircle /> Account</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
