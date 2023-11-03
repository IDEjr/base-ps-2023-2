import Image from 'next/image'

import borderStyles from '@/styles/borders.module.css'

import { getElementStyles } from '@/utils/style-utils'
import { getElementJSON } from '@/utils/get-element-info'
import { getBorderClassByType } from '@/utils/borderUtils'

interface StartersProps {
  element: string
}

export function StarterGrid({ element }: StartersProps) {
  const activeElement = getElementJSON(element)

  return (
    <div className='h-full w-full'>
      <h2
        className={`
          mb-12 whitespace-nowrap bg-white text-5xl leading-none
          ${getElementStyles(element)}
        `}
      >
        {element}
      </h2>

      <div className='flex w-full gap-8'>
        <div className='grid h-[512px] basis-1/3 grid-cols-4 grid-rows-3 items-center justify-center gap-x-6 gap-y-12'>
          {activeElement.pokemons.map((item) => {
            return (
              <div
                key={item.imgUrl}
                className={`
                  flex aspect-square min-h-[40px] min-w-[40px] items-center justify-center
                  ${borderStyles.gridElementCorners}
                  ${getBorderClassByType(element)}
                `}
              >
                <Image
                  alt=''
                  src={item.imgUrl}
                  width={100}
                  height={100}
                  quality={100}
                  className='h-20 w-fit p-2 transition-transform duration-300 hover:scale-110'
                />
              </div>
            )
          })}
        </div>

        <div className='relative ml-4 flex flex-1 items-center justify-center'>
          <Image
            alt=''
            src='/img/neko-piscando.png'
            width={566}
            height={547}
            className='absolute -z-10'
          />

          <div className='flex w-full justify-between self-end text-xl text-black'>
            {/* Fraquezas */}
            <div className='flex flex-col gap-5'>
              <p>FRA:</p>
              <div className='flex gap-2.5'>
                {activeElement.fraquezas.map((weakness) => {
                  return (
                    <Image
                      alt=''
                      src={weakness.imgUrl}
                      width={56}
                      height={56}
                      className='h-12 w-12 transition-all hover:-translate-y-2'
                    />
                  )
                })}
              </div>
            </div>
            {/* Superefetivos */}
            <div className='flex flex-col gap-5'>
              <p>SE:</p>
              <div className='flex gap-2.5'>
                {activeElement.superEfetivo.map((effective) => {
                  return (
                    <Image
                      alt=''
                      width={56}
                      height={56}
                      className='h-12 w-12 transition-all hover:-translate-y-2'
                      src={effective.imgUrl}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
