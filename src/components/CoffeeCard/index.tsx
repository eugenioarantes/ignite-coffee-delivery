import { FC, useContext } from 'react'
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
import { NavLink } from 'react-router-dom'
import { DeliveryContext } from '../../contexts/DeliveryContext'
import { Input } from '../Input'
import { InputHome } from '../InputHome'

interface CoffeeListProps {
  coffee: CoffeeListType
}

export const CoffeeCard: FC<CoffeeListProps> = ({ coffee }) => {
  const { coffeeList, setCurrentCoffeeList } = useContext(DeliveryContext)

  const index = coffeeList.findIndex((item) => item.id === coffee.id)

  let haveCoffee = false

  if (index !== -1) haveCoffee = true

  function setCoffeeOnList(id: string, name: string, quantity: number): void {
    setCurrentCoffeeList(id, name, quantity)
  }

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
          <InputHome
            type="number"
            widthPX={72}
            heightPX={38}
            min={0}
            max={999}
            defaultValue={haveCoffee ? coffeeList[index].quantity : 0}
            onChange={setCoffeeOnList}
            coffeeData={{ id: coffee.id, name: coffee.name }}
          />
          <NavLink to="/shopping-cart" title="Shopping Cart">
            <ShoppingCart weight="fill" size={22} />
          </NavLink>
        </Checkout>
      </PurchaseContainer>
    </CardContainer>
  )
}
