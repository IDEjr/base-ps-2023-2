import Image from 'next/image'
import styles from '@/styles/home.module.css'
import localFont from 'next/font/local'

const myFont = localFont({ src: '../../../public/fonts/uni05_53.ttf' })
// Marcelo

export default function AboutSection() {
  return (
    <section
      id='about'
      className='flex min-h-screen snap-start flex-col items-center justify-center bg-idePurple'
    >
      <div className='w-5/6'>
        <h2
          className={`mb-6 text-5xl font-normal leading-[70px] ${styles.dropShadow}`}
        >
          SOBRE NOS
        </h2>

        <div className='flex'>
          <div className='bg-about flex max-h-[640px] w-1/2 flex-col items-center justify-center gap-24 overflow-hidden border-l-[16px] border-ideRed px-16 py-20'>
            <p
              className={`text-justify indent-12 text-xl leading-relaxed ${myFont.className}`}
            >
              A IDE é a empresa júnior dos cursos Ciência e Engenharia de
              Computação da Universidade Federal do Rio Grande do Sul. Formada
              por alunos interessados em se tornarem empreendedores e
              profissionais excepcionais, a IDE fornece soluções em software,
              como sites e sistemas, com preços abaixo do mercado, aliados à
              excelência da UFRGS, o Instituto de Informática e seus
              professores, que fornecem apoio técnico e aconselhamento aos
              estudantes.
            </p>

            <Image
              src='/img/logo-pixelado-branco.png'
              alt='ide-logo'
              className='h-16 w-32'
              width={150}
              height={80}
            />
          </div>

          <div className='flex w-1/2 items-center justify-center'>
            <Image
              src='/img/neko-comemorando.png'
              alt='neko-comemorando'
              width={357}
              height={564}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
