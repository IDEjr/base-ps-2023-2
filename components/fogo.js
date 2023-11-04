import styles from '../src/styles/fogo.module.css'
import borders from '../src/styles/borders.module.css'

const Fogo = () => {
    return (
        <div className={styles['container-fogo']} id='fogo'>
            <h1 className={styles['fogo-title']}>FOGO</h1>
            <div className={styles['fogo-row']}>
                <div className={styles['fogo-conteudo']}>
                    <div className={styles['fogo-conteudo-cell1']}>
                        <div className={`${borders.pixelCorners} ${borders.red}`}>
                            <img src="/img//pokemons/fogo/1.png" alt="pokemo-1" className={styles['fogo-img']} />
                        </div >
                        <div className={`${borders.pixelCorners} ${borders.red}`}>
                            <img src="/img//pokemons/fogo/2.png" alt="pokemo-2" className={styles['fogo-img']} />
                        </div>
                        <div className={`${borders.pixelCorners} ${borders.red}`}>
                            <img src="/img//pokemons/fogo/3.png" alt="pokemo-3" className={styles['fogo-img']} />
                        </div>
                        <div className={`${borders.pixelCorners} ${borders.red}`}>
                            <img src="/img//pokemons/fogo/4.png" alt="pokemo-4" className={styles['fogo-img']} />
                        </div>
                    </div >
                    <div className={styles['fogo-conteudo-cell1']}>
                        <div className={`${borders.pixelCorners} ${borders.red}`}>
                            <img src="/img//pokemons/fogo/5.png" alt="pokemo-5" className={styles['fogo-img']} />
                        </div>
                        <div className={`${borders.pixelCorners} ${borders.red}`}>
                            <img src="/img//pokemons/fogo/6.png" alt="pokemo-6" className={styles['fogo-img']} />
                        </div>
                        <div className={`${borders.pixelCorners} ${borders.red}`}>
                            <img src="/img//pokemons/fogo/7.png" alt="pokemo-7" className={styles['fogo-img']} />
                        </div>
                        <div className={`${borders.pixelCorners} ${borders.red}`}>
                            <img src="/img//pokemons/fogo/8.png" alt="pokemo-8" className={styles['fogo-img']} />
                        </div>
                    </div>
                    <div className={styles['fogo-conteudo-cell1']}>
                        <div className={`${borders.pixelCorners} ${borders.red}`}>
                            <img src="/img//pokemons/fogo/9.png" alt="pokemo-9" className={styles['fogo-img']} />
                        </div>
                        <div className={`${borders.pixelCorners} ${borders.red}`}>
                            <img src="/img//pokemons/fogo/10.png" alt="pokemo-10" className={styles['fogo-img']} />
                        </div>
                        <div className={`${borders.pixelCorners} ${borders.red}`}>
                            <img src="/img//pokemons/fogo/11.png" alt="pokemo-11" className={styles['fogo-img']} />
                        </div>
                        <div className={`${borders.pixelCorners} ${borders.red}`}>
                            <img src="/img//pokemons/fogo/12.png" alt="pokemo-12" className={styles['fogo-img']} />
                        </div>
                    </div>
                    <div className={styles['fogo-conteudo-cell2']}>
                        <div className={styles['fogo-links']}>
                            <div className={styles['fogo-elements']}>
                                <a href="#agua">
                                    <button className={styles['fogo-button']}>
                                        <h2 className={styles['link']}></h2>
                                        <img src="/img/Tipos/agua_longo.png" alt="agua_longo" className={styles['button-icon']} />
                                    </button>
                                </a>
                                <a href="#planta">
                                    <button className={styles['fogo-button']}>
                                        <h2 className={styles['link']}></h2>
                                        <img src="/img/Tipos/Planta_longo.png" alt="Planta_longo" className={styles['button-icon']} />
                                    </button>
                                </a>
                                <a href="#inicio">
                                    <button className={styles['fogo-button']}>
                                        <h2 className={styles['link']}></h2>
                                        <img src="/img/Tipos/Fogo_longo.png" alt="Fogo_longo" className={styles['button-icon']} />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['fogo-column2']}>
                    <div className={styles['fogo-frase']}>
                        <div className={styles['frase']}>
                            <div className={styles['text-fra']}>
                                FRA:
                            </div>
                            <div className={styles['tipo']}>
                            <img src="/img/tipos/agua.png" alt="tipo-agua" className={styles['fogo-tipo']} />
                            <img src="/img/tipos/terrestre.png" alt="tipo-terrestre" className={styles['fogo-tipo']} />
                            <img src="/img/tipos/pedra.png" alt="tipo-pedra" className={styles['fogo-tipo']} />
                            </div>
                        </div>
                        <div>
                            <img src="/img/neko-piscando.png" alt="neko-piscando" className={styles['fogo-img2']} />
                        </div>
                        <div className={styles['frase']}>
                            <div className={styles['text-fra']}>
                                SE:
                            </div>
                            <div className={styles['tipo']}>
                            <img src="/img/tipos/planta.png" alt="tipo-planta" className={styles['fogo-tipo']} />
                            <img src="/img/tipos/gelo.png" alt="tipo-gelo" className={styles['fogo-tipo']} />
                            <img src="/img/tipos/inseto.png" alt="tipo-inseto" className={styles['fogo-tipo']} />
                            <img src="/img/tipos/aço.png" alt="tipo-aço" className={styles['fogo-tipo']} />
                            </div>
                        </div>
                    </div>
                    <div className={`${borders.pixelCornersDescription} ${borders.red}`}>
                        <div className={styles['text-fala']}>
                        O tipo Fogo é conhecido por sua chama ardente e poder de queimar. Pokémons do tipo Fogo são ofensivos, apaixonados e resistem a Planta e Inseto.
                        </div>
                    </div>
                </div>
            </div>

        </div >

    )
}

export default Fogo;