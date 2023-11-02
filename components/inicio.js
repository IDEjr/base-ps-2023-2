import styles from '../src/styles/inicio.module.css'

const Inicio = () => {
    return (
        <div className={styles['container-inicio']} id='inicio'>
            <div>
                <h1 className={styles['inicio-title']}>CONHECENDO OS STARTERS</h1>

            </div>
            <div className={styles['inicio-conteudo']}>
                <div className={styles['inicio-conteudo-cell1']}>
                    <h2 className={styles['text-escolha']}>ESCOLHA UM!</h2>
                    <img src="/img/neko-dormindo.png" alt="neko-dormindo" className={styles['inicio-img']} />
                </div>
                <div className={styles['vl']}></div>
                <div className={styles['inicio-conteudo-cell2']}>
                    <div className={styles['inicio-texto-aspas']}>
                        <img src="\img\aspas.png" alt="aspas" className={styles['inicio-aspas']} />
                        <div className={styles['text-fala']}>
                            Treinadores Pokémon enfrentam uma decisão
                            crucial ao escolher seu Pokémon inicial, pois
                            isso moldará suas aventuras. Os tipos - Água,
                            Fogo e Planta - influenciam as batalhas e
                            estratégias. Água domina Fogo, Fogo vence
                            Planta, e Planta supera Água. Escolher com
                            sabedoria é a chave para o sucesso nas
                            jornadas Pokémon. Conheça um pouco
                            mais sobre esses tipos!
                        </div>
                        <img src="\img\aspas.png" alt="aspas" className={styles['inicio-aspas-end']} />
                    </div>
                </div>



            </div>
            <div className={styles['inicio-links']}>
                <div className={styles['inicio-elements']}>
                    <a href="/agua">
                        <button className={styles['inicio-button']}>
                            <h2 className={styles['link']}>AGUA</h2>
                            <img src="/img/Tipos/Agua_longo.png" alt="Agua_longo" className={styles['button-icon']} />
                        </button>
                    </a>
                    <a href="/planta">
                        <button className={styles['inicio-button']}>
                            <h2 className={styles['link']}>PLANTA</h2>
                            <img src="/img/Tipos/Planta_longo.png" alt="Planta_longo" className={styles['button-icon']} />
                        </button>
                    </a>
                    <a href="/fogo">
                        <button className={styles['inicio-button']}>
                            <h2 className={styles['link']}>FOGO</h2>
                            <img src="/img/Tipos/Fogo_longo.png" alt="Fogo_longo" className={styles['button-icon']} />
                        </button>
                    </a>
                </div>

                <a href="https://www.idejr.com.br/" className={styles['inicio-ide']}>
                    <img src="\img\logo-pixelado-roxo.png" alt="logo-pixelado-roxo" className={styles['button-ide']} />
                </a>




            </div>


        </div >
    )
}

export default Inicio;