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

interface CoffeeListProps {
  coffee: CoffeeListType
}

export const CoffeeCard: FC<CoffeeListProps> = ({ coffee }) => {
  const { coffeeList, setCurrentCoffeeList } = useContext(DeliveryContext)

  const index = coffeeList.findIndex((item) => item.id === coffee.id)

  let haveCoffee = false

  if (index !== -1) haveCoffee = true

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
          <input
            type="number"
            defaultValue={haveCoffee ? coffeeList[index].quantity : 0}
            min={0}
            onChange={(event) =>
              setCurrentCoffeeList(
                coffee.id,
                coffee.name,
                Number(event.target.value),
              )
            }
          />
          <NavLink to="/shopping-cart" title="Shopping Cart">
            <ShoppingCart weight="fill" size={22} />
          </NavLink>
        </Checkout>
      </PurchaseContainer>
    </CardContainer>
  )
}
