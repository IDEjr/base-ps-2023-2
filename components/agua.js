import styles from '../src/styles/agua.module.css'
import borders from '../src/styles/borders.module.css'

const Agua = () => {
    return (
        <div className={styles['container-agua']} id='agua'>
            <h1 className={styles['agua-title']}>ÁGUA</h1>
            <div className={styles['agua-row']}>
                <div className={styles['agua-conteudo']}>
                    <div className={styles['agua-conteudo-cell1']}>
                        <div className={`${borders.pixelCorners} ${borders.blue}`}>
                            <img src="/img//pokemons/agua/1.png" alt="pokemo-1" className={styles['agua-img']} />
                        </div >
                        <div className={`${borders.pixelCorners} ${borders.blue}`}>
                            <img src="/img//pokemons/agua/2.png" alt="pokemo-2" className={styles['agua-img']} />
                        </div>
                        <div className={`${borders.pixelCorners} ${borders.blue}`}>
                            <img src="/img//pokemons/agua/3.png" alt="pokemo-3" className={styles['agua-img']} />
                        </div>
                        <div className={`${borders.pixelCorners} ${borders.blue}`}>
                            <img src="/img//pokemons/agua/4.png" alt="pokemo-4" className={styles['agua-img']} />
                        </div>
                    </div >
                    <div className={styles['agua-conteudo-cell1']}>
                        <div className={`${borders.pixelCorners} ${borders.blue}`}>
                            <img src="/img//pokemons/agua/5.png" alt="pokemo-5" className={styles['agua-img']} />
                        </div>
                        <div className={`${borders.pixelCorners} ${borders.blue}`}>
                            <img src="/img//pokemons/agua/6.png" alt="pokemo-6" className={styles['agua-img']} />
                        </div>
                        <div className={`${borders.pixelCorners} ${borders.blue}`}>
                            <img src="/img//pokemons/agua/7.png" alt="pokemo-7" className={styles['agua-img']} />
                        </div>
                        <div className={`${borders.pixelCorners} ${borders.blue}`}>
                            <img src="/img//pokemons/agua/8.png" alt="pokemo-8" className={styles['agua-img']} />
                        </div>
                    </div>
                    <div className={styles['agua-conteudo-cell1']}>
                        <div className={`${borders.pixelCorners} ${borders.blue}`}>
                            <img src="/img//pokemons/agua/9.png" alt="pokemo-9" className={styles['agua-img']} />
                        </div>
                        <div className={`${borders.pixelCorners} ${borders.blue}`}>
                            <img src="/img//pokemons/agua/10.png" alt="pokemo-10" className={styles['agua-img']} />
                        </div>
                        <div className={`${borders.pixelCorners} ${borders.blue}`}>
                            <img src="/img//pokemons/agua/11.png" alt="pokemo-11" className={styles['agua-img']} />
                        </div>
                        <div className={`${borders.pixelCorners} ${borders.blue}`}>
                            <img src="/img//pokemons/agua/12.png" alt="pokemo-12" className={styles['agua-img']} />
                        </div>
                    </div>
                    <div className={styles['agua-conteudo-cell2']}>
                        <div className={styles['agua-links']}>
                            <div className={styles['agua-elements']}>
                                <a href="#inicio">
                                    <button className={styles['agua-button']}>
                                        <h2 className={styles['link']}></h2>
                                        <img src="/img/Tipos/Agua_longo.png" alt="Agua_longo" className={styles['button-icon']} />
                                    </button>
                                </a>
                                <a href="#planta">
                                    <button className={styles['agua-button']}>
                                        <h2 className={styles['link']}></h2>
                                        <img src="/img/Tipos/Planta_longo.png" alt="Planta_longo" className={styles['button-icon']} />
                                    </button>
                                </a>
                                <a href="#fogo">
                                    <button className={styles['agua-button']}>
                                        <h2 className={styles['link']}></h2>
                                        <img src="/img/Tipos/Fogo_longo.png" alt="Fogo_longo" className={styles['button-icon']} />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['agua-column2']}>
                    <div className={styles['agua-frase']}>
                        <div className={styles['frase']}>
                            <div className={styles['text-fra']}>
                                FRA:
                            </div>
                            <div className={styles['tipo']}>
                            <img src="/img/tipos/eletrico.png" alt="tipo-eletrico" className={styles['agua-tipo']} />
                            <img src="/img/tipos/planta.png" alt="tipo-planta" className={styles['agua-tipo']} />
                            </div>
                        </div>
                        <div>
                            <img src="/img/neko-piscando.png" alt="neko-piscando" className={styles['agua-img2']} />
                        </div>
                        <div className={styles['frase']}>
                            <div className={styles['text-fra']}>
                                SE:
                            </div>
                            <div className={styles['tipo']}>
                            <img src="/img/tipos/fogo.png" alt="tipo-fogo" className={styles['agua-tipo']} />
                            <img src="/img/tipos/terrestre.png" alt="tipo-terrestre" className={styles['agua-tipo']} />
                            <img src="/img/tipos/pedra.png" alt="tipo-pedra" className={styles['agua-tipo']} />
                            </div>
                        </div>
                    </div>
                    <div className={`${borders.pixelCornersDescription} ${borders.blue}`}>
                        <div className={styles['text-fala']}>
                            Água é um tipo calmo e versátil, com vantagem sobre Fogo e Terrestre. Pokémons aquáticos são frequentemente encontrados em ambientes úmidos.
                        </div>
                    </div>
                </div>
            </div>

        </div >

    )
}

export default Agua;