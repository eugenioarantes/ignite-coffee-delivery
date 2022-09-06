import { ButtonContainer, HeaderContainer, NavContainer } from './styles'
import logoCoffeDelivery from '../../assets/Logo-coffee-delivery.svg'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeDelivery} alt="" />

      <NavContainer>
        <NavLink to="/" title="Localização">
          <ButtonContainer $color="purple">
            <MapPin weight="fill" />
            <span> Belo Horizonte, MG</span>
          </ButtonContainer>
        </NavLink>

        <NavLink to="/shopping-cart" title="Carrinho">
          <ButtonContainer $color="yellow">
            <ShoppingCart weight="fill" />
          </ButtonContainer>
        </NavLink>
      </NavContainer>
    </HeaderContainer>
  )
}
