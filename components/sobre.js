import styles from '../src/styles/sobre.module.css'

const Sobre = () => {
    return (
        <div className={styles['container-sobre']} id='sobre'>
            <div>
                <h1 className={styles['sobre-title']}>SOBRE NÓS</h1>
            </div>
            <div className={styles['sobre-conteudo']}>
                <div className={styles['sobre-conteudo-cell1_1']}></div>
                <div className={styles['sobre-conteudo-cell1']}>
                    <div className={styles['sobre-texto']}>
                        <div className={styles['text-sobre']}>
                        A IDE é a empresa júnior dos cursos 
                        Ciência e Engenharia de Computação da Universidade Federal do Rio Grande do 
                        Sul. Formada por alunos interessados em 
                        se tornarem empreendedores e 
                        profissionais excepcionais, a IDE fornece 
                        soluções em software, como sites e 
                        sistemas, com preços abaixo do 
                        mercado, aliados à excelência da UFRGS, 
                        o Instituto de Informática e seus 
                        professores, que fornecem apoio técnico 
                        e aconselhamento aos estudantes.
                        </div>
                    </div >
                    <img src="\img\ide-logo.png" alt="ide-logo" className={styles['ide-logo']} />
                </div >
                <div className={styles['sobre-conteudo-cell2']}>
                        <img src="/img/neko-comemorando.png" alt="neko-comemorando" className={styles['sobre-img']} />
                    </div>
            </div >
        </div >
    )
}
export default Sobre;