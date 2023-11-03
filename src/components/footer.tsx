import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className='relative flex h-[512px] w-full snap-start flex-col items-center justify-center bg-footer'>
      {/* Logo posicionado absolutamente em baixo à direita */}
      <Image
        alt=''
        src='/img/logo-pixelado-branco.png'
        width={150}
        height={80}
        className='absolute bottom-8 right-8'
      />

      <div className='flex flex-col gap-16'>
        {/* Ícones c/ links */}
        <ul className='flex gap-6 self-center'>
          <Link
            className='transition-transform duration-150 hover:scale-105'
            target='_blank'
            href='https://www.pokemon.com/'
          >
            <Image alt='' src='/img/pokemon-logo.png' width={56} height={56} />
          </Link>
          <Link
            className='transition-transform duration-150 hover:scale-105'
            target='_blank'
            href='https://instagram.com/ide_jr/'
          >
            <Image alt='' src='/img/ig-logo.png' width={56} height={56} />
          </Link>
          <Link
            className='transition-transform duration-150 hover:scale-105'
            target='_blank'
            href='https://www.linkedin.com/company/empresa-j%C3%BAnior-ide/'
          >
            <Image alt='' src='/img/linkedin-logo.png' width={56} height={56} />
          </Link>
          <Link
            className='transition-transform duration-150 hover:scale-105'
            target='_blank'
            href='https://idejr.com.br/'
          >
            <Image alt='' src='/img/ide-logo.png' width={92} height={56} />
          </Link>
        </ul>

        {/* Direitos/Termos/Políticas */}
        <div className='flex flex-col gap-4'>
          <p className='whitespace-nowrap text-center'>
            株式会社ポケモン (The Pokémon Company) © x IDE © Todos os direitos
            reservados.
          </p>

          <span className='flex self-center text-center'>
            <Link
              className='underline-offset-2 brightness-125 hover:text-ideRed hover:underline'
              href='#home'
            >
              Termos de Uso
            </Link>
            &nbsp;|&nbsp;
            <Link
              className='underline-offset-2 brightness-125 hover:text-ideRed hover:underline'
              href='#home'
            >
              Política de Privacidade
            </Link>
            &nbsp;|&nbsp;
            <Link
              className='underline-offset-2 brightness-125 hover:text-ideRed hover:underline'
              href='#home'
            >
              Política de Cookies
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
