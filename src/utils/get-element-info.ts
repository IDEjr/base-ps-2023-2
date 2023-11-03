import Info from '@content/pokemons.json'

export function getElementJSON(element: string) {
  if (element === 'AGUA') {
    return Info.AGUA
  }
  if (element === 'FOGO') {
    return Info.FOGO
  }
  if (element === 'PLANTA') {
    return Info.PLANTA
  }
}