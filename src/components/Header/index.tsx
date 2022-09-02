import { ButtonContainer, HeaderContainer, NavContainer } from './styles'
import logoIgnite from '../../assets/Logo-coffee-delivery.svg'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />

      <NavContainer>
        <NavLink to="/" title="Location">
          <ButtonContainer $color="purple">
            <MapPin weight="fill" />
            <span> Porto Alegre, RS</span>
          </ButtonContainer>
        </NavLink>

        <NavLink to="/history" title="Shopping Cart">
          <ButtonContainer $color="yellow">
            <ShoppingCart weight="fill" />
          </ButtonContainer>
        </NavLink>
      </NavContainer>
    </HeaderContainer>
  )
}
