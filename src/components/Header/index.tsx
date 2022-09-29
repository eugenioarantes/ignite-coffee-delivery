import { ButtonContainer, HeaderContainer, NavContainer } from './styles'
import logoCoffeDelivery from '../../assets/Logo-coffee-delivery.svg'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { DeliveryContext } from '../../contexts/DeliveryContext'

export function Header() {
  const { coffeeList, setCurrentPaymentMethod } = useContext(DeliveryContext)

  const resetPaymentMethod = (): void => {
    setCurrentPaymentMethod('')
  }

  return (
    <HeaderContainer>
      <NavLink to="/" title="Localização">
        <img src={logoCoffeDelivery} alt="" />
      </NavLink>

      <NavContainer>
        <NavLink to="/" title="Localização">
          <ButtonContainer $color="purple">
            <MapPin weight="fill" />
            <span> Belo Horizonte, MG</span>
          </ButtonContainer>
        </NavLink>

        <NavLink
          to="/shopping-cart"
          title="Carrinho"
          onClick={resetPaymentMethod}
        >
          <ButtonContainer $color="yellow" $quantity={coffeeList.length}>
            <ShoppingCart weight="fill" />
          </ButtonContainer>
        </NavLink>
      </NavContainer>
    </HeaderContainer>
  )
}
