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
    <section className='mx-4 flex min-h-screen flex-1 snap-start flex-col items-center justify-center text-idePurple lg:mx-[72px]'>
      {element === null && <StarterInformation />}

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

        {element === null && (
          <div
            className={
              borderStyles.pixelCorners +
              ' flex flex-1 items-center justify-center ' +
              borderStyles.purple
            }
          >
            <Link
              className='flex h-full w-full items-center justify-center'
              href={'https://idejr.com.br'}
            >
              <Image
                alt=''
                src={'/img/logo-pixelado-roxo.png'}
                width={140}
                height={75}
                priority
              />
            </Link>
          </div>
        )}

        {element !== null && (
          <div
            className={
              borderStyles.pixelCornersDescription +
              ' ml-8 flex h-[120px] flex-1 -translate-y-4 items-center justify-center self-start px-10 py-6  ' +
              getBorderClassByType(element)
            }
          >
            <p className='text-justify text-xs tracking-tight text-black md:text-sm'>
              {activeElementJSON.description}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
