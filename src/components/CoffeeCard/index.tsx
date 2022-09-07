import { FC } from 'react'
import { CoffeeListType } from '../../server/coffees'
import { ShoppingCart } from 'phosphor-react'

import {
  CardContainer,
  Checkout,
  CoffeeType,
  CoffeeTypeContainer,
  Description,
  Price,
  PurchaseContainer,
  TitleName,
  TypeCoffee,
} from './styles'

interface CoffeeListProps {
  coffee: CoffeeListType
}

export const CoffeeCard: FC<CoffeeListProps> = ({ coffee }) => {
  return (
    <CardContainer>
      <img src={coffee.imageURL} alt="" />

      <CoffeeTypeContainer>
        {coffee.type &&
          coffee.type.map((item) => {
            return (
              <CoffeeType key={item}>
                <TypeCoffee>{item}</TypeCoffee>
              </CoffeeType>
            )
          })}
      </CoffeeTypeContainer>

      <TitleName>{coffee.name}</TitleName>
      <Description>{coffee.description}</Description>

      <PurchaseContainer>
        <Price>
          <span>R$</span>
          <strong>
            {coffee.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
          </strong>
        </Price>

        <Checkout>
          <input type="number" defaultValue={0} min={0} />
          <button type="button">
            <ShoppingCart weight="fill" size={22} />
          </button>
        </Checkout>
      </PurchaseContainer>
    </CardContainer>
  )
}
