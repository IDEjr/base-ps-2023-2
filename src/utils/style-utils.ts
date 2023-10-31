import styles from '@/styles/borders.module.css'

const waterStyle = ' ' + styles.blue + ' fill-white bg-water text-water '
const fireStyle = ' ' + styles.red + ' fill-white bg-fire text-fire '
const plantStyle = ' ' + styles.green + ' fill-white bg-plant text-plant '
const unselectedStyle = ' ' + styles.purple + ' fill-idePurple text-idePurple '

export function getElementStyles(chosenElement: string): string {
  if (chosenElement === 'FOGO') return fireStyle
  if (chosenElement === 'AGUA') return waterStyle
  if (chosenElement === 'PLANTA') return plantStyle
  if (chosenElement === null) return unselectedStyle
}