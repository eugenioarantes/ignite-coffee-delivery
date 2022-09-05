/* eslint-disable prettier/prettier */
import expresso from '../assets/coffee/Expresso-tradicional.svg'
import americano from '../assets/coffee/Expresso-americano.svg'
import cremoso from '../assets/coffee/Expresso-cremoso.svg'
import gelado from '../assets/coffee/Expresso-gelado.svg'
import cafeComLeite from '../assets/coffee/Cafe-com-leite.svg'
import latte from '../assets/coffee/Latte.svg'
import capuccino from '../assets/coffee/Capuccino.svg'
import macchiato from '../assets/coffee/Macchiato.svg'
import mocaccino from '../assets/coffee/Mocaccino.svg'
import chocolateQuente from '../assets/coffee/Chocolate-quente.svg'
import cubano from '../assets/coffee/Cubano.svg'
import havaiano from '../assets/coffee/Havaiano.svg'
import arabe from '../assets/coffee/Arabe.svg'
import irlandes from '../assets/coffee/Irlandes.svg'

export interface CoffeeListType {
  id: string
  imageURL: string
  type: string[]
  name: string
  description: string
  price: number
}

export const CoffeeList: CoffeeListType[] = [
  {
    id: '1',
    imageURL: expresso,
    type: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.90,
  },
  {
    id: '2',
    imageURL: americano,
    type: ['tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.90,
  },
  {
    id: '3',
    imageURL: cremoso,
    type: ['tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.90,
  },
  {
    id: '4',
    imageURL: gelado,
    type: ['tradicional', 'gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.90,
  },
  {
    id: '5',
    imageURL: cafeComLeite,
    type: ['tradicional', 'com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.90,
  },
  {
    id: '6',
    imageURL: latte,
    type: ['tradicional', 'com leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.90,
  },
  {
    id: '7',
    imageURL: capuccino,
    type: ['tradicional', 'com leite'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.90,
  },
  {
    id: '8',
    imageURL: macchiato,
    type: ['tradicional', 'com leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.90,
  },
  {
    id: '9',
    imageURL: mocaccino,
    type: ['tradicional', 'com leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.90,
  },
  {
    id: '10',
    imageURL: chocolateQuente,
    type: ['especial', 'com leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.90,
  },
  {
    id: '11',
    imageURL: cubano,
    type: ['especial', 'alcoólico', 'gelado'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.90,
  },
  {
    id: '12',
    imageURL: havaiano,
    type: ['especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.90,
  },
  {
    id: '13',
    imageURL: arabe,
    type: ['especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.90,
  },
  {
    id: '14',
    imageURL: irlandes,
    type: ['especial', 'alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.90,
  },
]
