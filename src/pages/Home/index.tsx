import React from 'react'

import { CoffeeList } from '../../server/coffees'

import HomeMainCoffeImage from '../../assets/Home-main-coffee.svg'

import HomeShadowBackground from '../../assets/Home-shadow-background.svg'

import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import {
  CoffeeInformations,
  HomeContainer,
  HomeSubHeaderContainer,
  HomeInformations,
  InformationContentContainer,
  Container,
  CoffeeListContainer,
} from './styles'
import { CoffeeCard } from '../../components/CoffeeCard'

export const Home: React.FC = () => {
  return (
    <Container>
      <img src={HomeShadowBackground} alt="" className="shadow" />
      <HomeContainer>
        <HomeSubHeaderContainer>
          <HomeInformations>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>

            <CoffeeInformations>
              <InformationContentContainer $backgroundColor="yellow-700">
                <ShoppingCart weight="fill" />
                <span> Compra simples e segura</span>
              </InformationContentContainer>

              <InformationContentContainer $backgroundColor="gray-700">
                <Package weight="fill" />
                <span> Embalagem mantém o café intacto</span>
              </InformationContentContainer>

              <InformationContentContainer $backgroundColor="yellow-500">
                <Timer weight="fill" />
                <span> Entrega rápida e rastreada</span>
              </InformationContentContainer>

              <InformationContentContainer $backgroundColor="purple-500">
                <Coffee weight="fill" />
                <span> O café chega fresquinho até você</span>
              </InformationContentContainer>
            </CoffeeInformations>
          </HomeInformations>

          <img
            src={HomeMainCoffeImage}
            alt="logo coffe delivery"
            className="homeMainCoffeImage"
          />
        </HomeSubHeaderContainer>

        <h1 className="coffeeTitle">Nossos cafés</h1>

        <CoffeeListContainer>
          {CoffeeList.map((item) => {
            return <CoffeeCard key={item.id} coffee={item} />
          })}
        </CoffeeListContainer>
      </HomeContainer>
    </Container>
  )
}
