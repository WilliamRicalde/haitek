import ReactMarkdown from 'react-markdown'
import style from '../styles/Card.module.css'

export default function ServiceCard ({ data }) {
  return (
    <div className={style.card}>
      <div>
        <img loading='lazy' src={data.img} alt={data.titulo} />
      </div>
      <div>
        <div className={style.text}>
          <h2>{data.titulo}</h2>
        </div>
        <div className={style.text}>
          <ReactMarkdown>{data.descripcion}</ReactMarkdown>
        </div>
        <div className={style.text}>
          <strong>$ {data.precio} MXN</strong>
        </div>
      </div>
    </div>
  )
}
