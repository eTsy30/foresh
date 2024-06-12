import React from 'react'
import Image from 'next/image'
import styles from './header.styles.module.scss'
import logo from '../../../public/Image/icon/logo.svg'
export const Header = () => {
  const menu = [
    {
      title: 'Shower',
      link: '#Shower',
    },
    {
      title: 'Gallery',
      link: '#Gallery',
    },
    {
      title: 'Bio',
      link: '#Bio',
    },
    {
      title: 'Contact',
      link: '#Contact',
    },
  ]
  return (
    <header className={styles['header']}>
      <nav className={styles['header-navigation']}>
        {menu.map((item, index) => {
          return (
            <>
              {index === 2 && (
                <Image src={logo} alt="logo" width={64} height={64} />
              )}
              <a
                className={styles['header-navigation__link']}
                href={item.link}
                key={index}
              >
                <span>{item.title}</span>
              </a>
            </>
          )
        })}
      </nav>
      <span className={styles['header-navigation__line']}></span>
    </header>
  )
}
