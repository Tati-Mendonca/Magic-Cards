
export interface Card {
  name: string
  manaCost: string
  cmc: number
  colors: string[]
  colorIdentity: string[]
  type: string
  types: string[]
  subtypes?: string[]
  rarity: string
  set: string
  setName: string
  text: string
  artist: string
  number: string
  power?: string
  toughness?: string
  layout: string
  multiverseid?: string
  imageUrl?: string
  variations?: string[]
  foreignNames?: ForeignName[]
  printings: string[]
  originalText?: string
  originalType?: string
  legalities: Legality[]
  id: string
  flavor?: string
  rulings?: Ruling[]
  supertypes?: string[]
}

