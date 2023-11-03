import styles from '../../styles/home.module.css'
import borderStyles from '../../styles/borders.module.css'
import Link from 'next/link'

export default function HomeSection() {
  return (
    <section id='home' className={styles.section}>
      <img className={styles.img} src='/img/neko-anotando.png' />

      <div className={styles.title}>
        <p className={styles.dropShadow}>POKE</p>
        <p className={styles.dropShadow}>
          <span className={styles.redText}>IDE</span>X
        </p>

        <Link
          className={`${borderStyles.gridElementCorners} ${borderStyles.white} ${styles.button}`}
          href='#starter'
        >
          <span className={styles.dropShadow}>START</span>
        </Link>
      </div>
    </section>
  )
}
