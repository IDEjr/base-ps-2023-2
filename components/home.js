import styles from '../src/styles/home.module.css'

const Home = () => {
    return (
        <div className={styles['container-home']} id='home'>
            <img src="/img/neko-anotando.png" alt="neko-anotando" className={styles['home-img']}/>
            <div>
                <h1 className={styles['home-text']}>
                    <div className={styles['text-poke']}>POKE</div>
                    <span className={styles['text-ide']}>IDE</span>
                    <span className={styles['text-poke']}>X</span>
                </h1>
                <button className={styles['home-button']}>START</button>
            </div>
        </div>
    )
}

export default Home;