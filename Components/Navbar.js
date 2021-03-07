import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Navbar.module.css'

export default function Navbar () {
  return (
    <>
      <nav className={styles.navbar}>
        <div className='main'>
          <Image src='/img-logo.svg' alt='Logo Haitek' width={70} height={70} />
        </div>
        <div className='container'>
          <Link href='#quienes-somos'>
            <a>
              Nosotros
            </a>
          </Link>
          <Link href='#servicios'>
            <a>Servicios</a>
          </Link>
        </div>
      </nav>
    </>
  )
}
