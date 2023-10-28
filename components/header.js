import styles from '../src/styles/header.module.css'

const Header = () => (
    <div className={styles['container-header']}>
        <a href="#home">
            <h2 className={styles['link']}>HOME</h2>
        </a>
        <a href="/initials">
            <h2 className={styles['link']}>INICIAIS</h2>
        </a>
        <a href="/about">
            <h2 className={styles['link']}>SOBRE</h2>
        </a>
        <a href="/form">
            <h2 className={styles['link']}>FORMULARIO</h2>
        </a>
    </div>
);

export default Header;