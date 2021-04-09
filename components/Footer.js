import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaYoutube } from 'react-icons/fa'

import style from '../styles/Footer.module.css'

export default function Footer () {
  return (
    <footer className={style.footer}>
      <div className={style.flex}>
        <div>
          <Image
            src='/img-logo.svg'
            alt='Logo haitek.'
            height={100}
            width={100}
          />
          <h2>Haitek</h2>
        </div>
        <div>
          <Link href='https://www.facebook.com/HaitekCozumel' passHref>
            <a><FaFacebookF /></a>
          </Link>
          <Link href='https://www.youtube.com/channel/UCBzqQ14u7dC38d77GsAwtGA/featured' passHref>
            <a><FaYoutube /></a>
          </Link>
          {/* <a href='/'><FaTwitter /></a>
          <a href='/'><FaInstagram /></a> */}
        </div>
      </div>
      <hr />
      <span>© 2021 Haitek - Cozumel, Quintana Roo, México</span>
    </footer>
  )
}
