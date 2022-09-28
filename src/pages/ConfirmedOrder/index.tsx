import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import React, { useContext } from 'react'

import motorcycleDelivery from '../../assets/motorcycle-delivery.svg'
import { DeliveryContext } from '../../contexts/DeliveryContext'
import {
  Container,
  Content,
  DeliveryDataContainer,
  Icon,
  InformationsData,
} from './styles'

const ConfirmedOrder: React.FC = () => {
  const { address, paymentMethod } = useContext(DeliveryContext)

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
              Entrega em Rua {address.street}, {address.number}{' '}
              {address.neighborhood} - {address.city},{' '}
              {address.UF.toUpperCase()}
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
              <strong>{paymentMethod}</strong>
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
