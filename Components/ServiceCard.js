import style from '../styles/Card.module.css'

export default function ServiceCard ({ data }) {
  return (
    <div className={style.card}>
      <div>
        <img src={data.img} alt={data.titulo} />
      </div>
      <div className={style.text}>
        <h2>{data.titulo}</h2>
        <p>{data.descripcion}</p>
        <strong>$ {data.precio} MXN</strong>
      </div>
    </div>
  )
}
