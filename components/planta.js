import styles from '../src/styles/planta.module.css'
import borders from '../src/styles/borders.module.css'

const Planta = () => {
    return (
        <div className={styles['container-planta']} id='planta'>
            <h1 className={styles['planta-title']}>PLANTA</h1>
            <div className={styles['planta-row']}>
                <div className={styles['planta-conteudo']}>
                    <div className={styles['planta-conteudo-cell1']}>
                        <div className={`${borders.pixelCorners} ${borders.green}`}>
                            <img src="/img//pokemons/planta/1.png" alt="pokemo-1" className={styles['planta-img']} />
                        </div >
                        <div className={`${borders.pixelCorners} ${borders.green}`}>
                            <img src="/img//pokemons/planta/2.png" alt="pokemo-2" className={styles['planta-img']} />
                        </div>
                        <div className={`${borders.pixelCorners} ${borders.green}`}>
                            <img src="/img//pokemons/planta/3.png" alt="pokemo-3" className={styles['planta-img']} />
                        </div>
                        <div className={`${borders.pixelCorners} ${borders.green}`}>
                            <img src="/img//pokemons/planta/4.png" alt="pokemo-4" className={styles['planta-img']} />
                        </div>
                    </div >
                    <div className={styles['planta-conteudo-cell1']}>
                        <div className={`${borders.pixelCorners} ${borders.green}`}>
                            <img src="/img//pokemons/planta/5.png" alt="pokemo-5" className={styles['planta-img']} />
                        </div>
                        <div className={`${borders.pixelCorners} ${borders.green}`}>
                            <img src="/img//pokemons/planta/6.png" alt="pokemo-6" className={styles['planta-img']} />
                        </div>
                        <div className={`${borders.pixelCorners} ${borders.green}`}>
                            <img src="/img//pokemons/planta/7.png" alt="pokemo-7" className={styles['planta-img']} />
                        </div>
                        <div className={`${borders.pixelCorners} ${borders.green}`}>
                            <img src="/img//pokemons/planta/8.png" alt="pokemo-8" className={styles['planta-img']} />
                        </div>
                    </div>
                    <div className={styles['planta-conteudo-cell1']}>
                        <div className={`${borders.pixelCorners} ${borders.green}`}>
                            <img src="/img//pokemons/planta/9.png" alt="pokemo-9" className={styles['planta-img']} />
                        </div>
                        <div className={`${borders.pixelCorners} ${borders.green}`}>
                            <img src="/img//pokemons/planta/10.png" alt="pokemo-10" className={styles['planta-img']} />
                        </div>
                        <div className={`${borders.pixelCorners} ${borders.green}`}>
                            <img src="/img//pokemons/planta/11.png" alt="pokemo-11" className={styles['planta-img']} />
                        </div>
                        <div className={`${borders.pixelCorners} ${borders.green}`}>
                            <img src="/img//pokemons/planta/12.png" alt="pokemo-12" className={styles['planta-img']} />
                        </div>
                    </div>
                    <div className={styles['planta-conteudo-cell2']}>
                        <div className={styles['planta-links']}>
                            <div className={styles['planta-elements']}>
                                <a href="#agua">
                                    <button className={styles['planta-button']}>
                                        <h2 className={styles['link']}></h2>
                                        <img src="/img/Tipos/agua_longo.png" alt="agua_longo" className={styles['button-icon']} />
                                    </button>
                                </a>
                                <a href="#inicio">
                                    <button className={styles['planta-button']}>
                                        <h2 className={styles['link']}></h2>
                                        <img src="/img/Tipos/Planta_longo.png" alt="Planta_longo" className={styles['button-icon']} />
                                    </button>
                                </a>
                                <a href="#fogo">
                                    <button className={styles['planta-button']}>
                                        <h2 className={styles['link']}></h2>
                                        <img src="/img/Tipos/Fogo_longo.png" alt="Fogo_longo" className={styles['button-icon']} />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['planta-column2']}>
                    <div className={styles['planta-frase']}>
                        <div className={styles['frase']}>
                            <div className={styles['text-fra']}>
                                FRA:
                            </div>
                            <div className={styles['tipo']}>
                            <img src="/img/tipos/fogo.png" alt="tipo-fogo" className={styles['planta-tipo']} />
                            <img src="/img/tipos/gelo.png" alt="tipo-gelo" className={styles['planta-tipo']} />
                            <img src="/img/tipos/poison.png" alt="tipo-poison" className={styles['planta-tipo']} />
                            <img src="/img/tipos/voador.png" alt="tipo-voador" className={styles['planta-tipo']} />
                            <img src="/img/tipos/inseto.png" alt="tipo-inseto" className={styles['planta-tipo']} />
                            </div>
                        </div>
                        <div>
                            <img src="/img/neko-piscando.png" alt="neko-piscando" className={styles['planta-img2']} />
                        </div>
                        <div className={styles['frase']}>
                            <div className={styles['text-fra']}>
                                SE:
                            </div>
                            <div className={styles['tipo']}>
                            <img src="/img/tipos/agua.png" alt="tipo-agua" className={styles['planta-tipo']} />
                            <img src="/img/tipos/terrestre.png" alt="tipo-terrestre" className={styles['planta-tipo']} />
                            <img src="/img/tipos/pedra.png" alt="tipo-pedra" className={styles['planta-tipo']} />
                            </div>
                        </div>
                    </div>
                    <div className={`${borders.pixelCornersDescription} ${borders.green}`}>
                        <div className={styles['text-fala']}>
                        Planta é um tipo ligado à natureza, resistente à Água e terra. Pokémons do tipo Planta frequentemente possuem habilidades de cura e controle de status.
                        </div>
                    </div>
                </div>
            </div>

        </div >

    )
}

export default Planta;