import Link from 'next/link'

export function Header() {
  return (
    <header className='absolute flex h-[64px] w-full items-center justify-center bg-[#1B1A1A] bg-opacity-60'>
      <nav className='mx-20 flex w-3/5 justify-between'>
        <Link
          className='underline-offset-2 transition-transform duration-100 hover:scale-105 hover:text-ideRed hover:underline hover:brightness-150'
          href='#home'
        >
          HOME
        </Link>
        <Link
          className='underline-offset-2 transition-transform duration-100 hover:scale-105 hover:text-ideRed hover:underline hover:brightness-150'
          href='#start'
        >
          INICIAIS
        </Link>
        <Link
          className='underline-offset-2 transition-transform duration-100 hover:scale-105 hover:text-ideRed hover:underline hover:brightness-150'
          href='#about'
        >
          SOBRE
        </Link>
        <Link
          className='underline-offset-2 transition-transform duration-100 hover:scale-105 hover:text-ideRed hover:underline hover:brightness-150'
          href='#form'
        >
          FORMULARIO
        </Link>
      </nav>
    </header>
  )
}
