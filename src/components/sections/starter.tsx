import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

import borderStyles from '@/styles/borders.module.css'

import { StarterGrid } from '../starter-grid'
import { ElementButton } from '../element-button'
import { StarterInformation } from '../starter-information'

import Agua from '@img/agua'
import Planta from '@img/planta'
import Fogo from '@img/fogo'

import { getElementJSON } from '@/utils/get-element-info'
import { getBorderClassByType } from '@/utils/borderUtils'

export default function StarterSection() {
  const [element, setElement] = useState<string | null>(null)

  function changeElement(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()

    let elementClicked = event.currentTarget.title

    if (elementClicked === element) {
      setElement(null)
    } else {
      setElement(elementClicked)
    }
  }

  const activeElementJSON = getElementJSON(element)

  return (
    <section
      id='starter'
      className='mx-4 flex min-h-screen flex-1 snap-start flex-col items-center justify-center text-idePurple lg:mx-[72px]'
    >
      {/* Se algum elemento estiver selecionado, renderiza isso */}
      {element === null && <StarterInformation />}

      {/* Se nenhum elemento estiver selecionado, renderiza isso */}
      {element !== null && <StarterGrid element={element} />}

      {/* Choose element */}
      <div className='mt-10 flex h-24 w-full'>
        {/* Buttons */}
        <div className='flex basis-1/3 items-center justify-center gap-8'>
          <ElementButton
            element='AGUA'
            Icon={Agua}
            activeElement={element}
            changeElement={changeElement}
          />

          <ElementButton
            element='PLANTA'
            Icon={Planta}
            activeElement={element}
            changeElement={changeElement}
          />

          <ElementButton
            element='FOGO'
            Icon={Fogo}
            activeElement={element}
            changeElement={changeElement}
          />
        </div>

        {/* Se nenhum elemento estiver selecionado, renderiza isso */}
        {element === null && (
          <div
            className={`
              flex flex-1 items-center justify-center
              ${borderStyles.gridElementCorners}
              ${getBorderClassByType(element)}
            `}
          >
            <Link
              className='group flex h-full w-full items-center justify-center shadow-xl drop-shadow-lg hover:scale-y-105 hover:bg-idePurple'
              href='https://idejr.com.br'
              target='_blank'
            >
              <Image
                alt=''
                src={'/img/logo-pixelado-roxo.png'}
                className=' transition-transform group-hover:scale-105 group-hover:contrast-200 group-hover:grayscale group-hover:invert'
                width={120}
                height={60}
                priority
              />
            </Link>
          </div>
        )}

        {/* Se algum elemento estiver selecionado, renderiza isso */}
        {element !== null && (
          <div
            className={`
              ml-8 flex min-h-[112px] flex-1 -translate-y-4 items-center justify-center self-start px-10 py-6
              ${borderStyles.pixelCornersDescription}
              ${getBorderClassByType(element)}
            `}
          >
            <p className='text-center text-sm tracking-tight text-black md:text-sm'>
              {activeElementJSON.description}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
