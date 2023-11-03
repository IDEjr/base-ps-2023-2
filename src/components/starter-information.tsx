import Image from 'next/image'

import borderStyles from '@/styles/borders.module.css'

export function StarterInformation() {
  return (
    <>
      <h2 className='mb-12 whitespace-nowrap text-5xl leading-none'>
        Conhecendo os Starters
      </h2>

      <div
        className={`
          flex h-[512px] w-full
          ${borderStyles.pixelCorners}
          ${borderStyles.purple}
        `}
      >
        {/* Texto descritivo */}
        <div className='flex basis-1/3 flex-col items-center justify-center gap-10 border-r-2 border-idePurple'>
          <span className='whitespace-nowrap text-xl uppercase'>
            Escolha um!
          </span>

          <Image
            alt=''
            src='/img/neko-dormindo.png'
            className='aspect-auto'
            width={322}
            height={288}
            priority
          />
        </div>

        <div className='relative flex flex-1 items-center justify-center'>
          <Image
            className='absolute left-0 top-0 mx-10 my-10 hidden lg:block'
            alt=''
            src={'/img/aspas.png'}
            width={64}
            height={64}
          />
          <p className='max-w-[730px] text-center leading-relaxed'>
            Treinadores Pokémon enfrentam uma decisão crucial ao escolher seu
            Pokémon inicial, pois isso moldará suas aventuras. Os tipos - Água,
            Fogo e Planta - influenciam as batalhas e estratégias. Água domina
            Fogo, Fogo vence Planta, e Planta supera Água. Escolher com
            sabedoria é a chave para o sucesso nas jornadas Pokémon. Conheça um
            pouco mais sobre esses tipos!
          </p>
          <Image
            className='absolute bottom-0 right-0 mx-10 my-10 hidden -scale-x-100 lg:block'
            alt=''
            src={'/img/aspas.png'}
            width={64}
            height={64}
          />
        </div>
      </div>
    </>
  )
}
