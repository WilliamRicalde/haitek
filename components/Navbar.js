import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { HiMenuAlt3, HiUsers, HiPuzzle, HiBookmark, HiMailOpen, HiHome } from 'react-icons/hi'

import styles from '../styles/Navbar.module.css'

export default function Navbar () {
  const [isActive, setIsActive] = useState(false)

  const changeVisibility = () => {
    const elm = document.querySelector('#container')

    if (isActive === false) {
      setIsActive(true)
      elm.style.visibility = 'visible'
    } else {
      setIsActive(false)
      elm.style.visibility = 'hidden'
    }
  }

  return (
    <>
      <nav className={styles.navbar}>
        <div>
          <Image
            src='/img-logo.svg'
            alt='Logo Haitek'
            width={70}
            height={70}
          />
        </div>
        <div>
          <button onClick={changeVisibility} aria-label='menu'>
            <HiMenuAlt3 />
          </button>
          <div className={styles.container} id='container'>
            <Link href='#top'>
              <a> <HiHome /> Home</a>
            </Link>
            <Link href='#quienes-somos'>
              <a> <HiUsers /> Nosotros</a>
            </Link>
            <Link href='#servicios'>
              <a> <HiPuzzle /> Servicios</a>
            </Link>
            <Link href='#servicios'>
              <a> <HiBookmark /> Blog</a>
            </Link>
            <Link href='#contacto'>
              <a> <HiMailOpen /> Contacto</a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
