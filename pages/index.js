/* eslint-disable no-undef */
import Head from 'next/head'
import Animation from '../components/Animation'
import Contact from '../components/Contact'
import ServiceCard from '../components/ServiceCard'
import home from '../public/haitek-animation.json'
import style from '../styles/Home.module.css'

export default function Home ({ Descripcion, servicios }) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Somos un grupo de jóvenes emprendedores que buscan proporcionar a nuestros clientes la tranquilidad de disponer de un proveedor confiable capaz de satisfaces to' />
        <meta name='robots' content='index, follow' />
        <title>Home | Haitek</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={style.main}>
        <div>
          <h1>Haitek</h1>
          <span>Tu problemas es nuestro problema</span>
        </div>
        <div>
          <Animation lotti={home} height={500} width={500} />
        </div>
      </main>
      <section className={style.about} id='quienes-somos'>
        <h1>¿Quienes Somos?</h1>
        <article>
          <div><img src='./banner.svg' alt='banner' /></div>
          <div><p>{Descripcion}</p></div>
        </article>
      </section>
      <section className={style.services} id='servicios'>
        <h1>Servicios</h1>
        <article>
          {
          servicios.map(serv => (
            <ServiceCard key={serv.id} data={{ ...serv }} />
          ))
        }
        </article>
      </section>
      <Contact />
    </>
  )
}

export async function getStaticProps () {
  const api = process.env.API_URI

  const about = await fetch(`${api}quienes-somos`)
  const { Descripcion } = await about.json()

  const serv = await fetch(`${api}servicios`)
  const servRes = await serv.json()

  const servicios = servRes.map(servicio => {
    return {
      id: servicio.id,
      titulo: servicio.Titulo,
      descripcion: servicio.Descripcion,
      precio: servicio.Precios,
      img: servicio.Imagen.url
    }
  })

  return {
    props: {
      Descripcion,
      servicios
    }
  }
}
