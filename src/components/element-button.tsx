import styles from '@/styles/borders.module.css'
import { getElementStyles } from '@/utils/style-utils'

interface ElementButtonProps {
  element: string
  activeElement: string | null
  Icon: (props: any) => JSX.Element
  changeElement: (event: any) => void
}

export function ElementButton({
  element,
  activeElement,
  Icon,
  changeElement,
}: ElementButtonProps) {
  // Da uma estilização base pro botão e permite override de propriedades com o className
  return (
    <div className='group mr-4 flex h-full w-full flex-col items-center justify-center '>
      <span
        className={`${getElementStyles(
          activeElement
        )} bg-white group-hover:brightness-125 `}
      >
        {element}
      </span>

      <button
        onClick={changeElement}
        title={element}
        className={`
          ${styles.pixelCorners} 
          flex w-full flex-1 items-center justify-center
          ${getElementStyles(activeElement)}
        `}
      >
        <Icon
          className={`
            group-hover:scale-125
            
            ${
              activeElement !== null
                ? 'group-hover:fill-white'
                : 'group-hover:fill-purple-600'
            }
            ${getElementStyles(activeElement)}
          `}
        />
      </button>
    </div>
  )
}
