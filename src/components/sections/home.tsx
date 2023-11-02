import Styles from "../../styles/home.module.css"
import Borders from "../../styles/borders.module.css"


export default function HomeSection() {
  return (
    
    <section className={Styles.section}>
        <img
          className={Styles.img}
          src="/img/neko-anotando.png"
        />
  
        <div className={Styles.titulo}>
          <p>POKE</p>
          <p>
            <span className={Styles.textoVermelho}>IDE</span>
          X</p>
          <div className={Borders.pixelCorners + " " + Borders.white + " " + Styles.botao}>
              <a href="#" >Start</a>
          </div>
        </div>
    </section>
  )
}