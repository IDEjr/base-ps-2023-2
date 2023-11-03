import Link from 'next/link'
import styles from '../styles/header.module.css'

// Lucas M.

export function Header() {
  return (
    <section className={styles.section}>
      <nav className={styles.container}>
        <Link href='#home'>HOME</Link>
        <Link href='#starter'>INICIAIS</Link>
        <Link href='#about'>SOBRE</Link>
        <Link href='#form'>FORMULARIO</Link>
      </nav>
    </section>
  )
}
