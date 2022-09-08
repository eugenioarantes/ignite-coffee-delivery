import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import React from 'react'

import motorcycleDelivery from '../../assets/motorcycle-delivery.svg'
import {
  Container,
  Content,
  DeliveryDataContainer,
  Icon,
  InformationsData,
} from './styles'

const ConfirmedOrder: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>

        <DeliveryDataContainer>
          <InformationsData>
            <Icon $colorIcon="purple-500">
              <MapPin size={20} weight="fill" />
            </Icon>

            <span>
              Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto
              Alegre, RS
            </span>
          </InformationsData>

          <InformationsData>
            <Icon $colorIcon="yellow-500">
              <CurrencyDollar size={20} weight="fill" />
            </Icon>
            <div>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </div>
          </InformationsData>

          <InformationsData>
            <Icon $colorIcon="yellow-700">
              <Timer size={20} weight="fill" />
            </Icon>
            <div>
              <span>Pagamento na entrega</span>
              <strong>Cartão de Crédito</strong>
            </div>
          </InformationsData>
        </DeliveryDataContainer>
      </Content>

      <div>
        <img src={motorcycleDelivery} alt="motorcycle delivery" />
      </div>
    </Container>
  )
}

export default ConfirmedOrder
