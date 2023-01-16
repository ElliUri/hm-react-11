import React from "react";
import classNames from "classnames";
import Logo from "../logo";
import styles from './style.module.scss'

const Header = (props) => {
  const {
    className
  } = props

  const headerClassNames = classNames(
    styles.header,
    {
      [`${className}`]: className
    }
  )
  return (
     <header className={headerClassNames}>
      <Logo />
      <nav className={styles['nav-list']}>
        <a className={styles['nav-list-item']} href="#">
          Our Work
        </a>
        <a className={styles['nav-list-item']} href="#">
          Principles
        </a>
        <a href="#" className={styles['nav-list-item']} >
          Products
        </a>
        <a href="#" className={styles['nav-list-item']} >
          Other 
        </a>
        <a href="#" className={styles['nav-list-item']} >
          Clients
        </a>
      </nav>
    </header>
  )
}

export default Header