import React from 'react'

import { IMaskInput } from 'react-imask'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import {
  CityInformationsContainer,
  CoffeeCard,
  ContentShoppingCart,
  DeliveryInformationContainer,
  Form,
  HeaderInformation,
  NumberAndComplementContainer,
  OrdersContainer,
  PaymentButton,
  PaymentInformationContainer,
  PaymentMethods,
  PersonalInformation,
  SelectedCoffeesContainer,
  ShoppingCartContainer,
  SummationContainer,
} from './styles'
import { Input } from '../../components/Input'
import { CoffeeList } from '../../server/coffees'

export const ShoppingCart: React.FC = () => {
  return (
    <ShoppingCartContainer>
      <DeliveryInformationContainer>
        <h1>Complete seu pedido</h1>
        <PersonalInformation>
          <HeaderInformation $colorIcon="yellow">
            <div>
              <MapPinLine size={22} />
              <h1>Endereço de Entrega</h1>
            </div>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </HeaderInformation>

          <Form>
            <IMaskInput
              mask="00.000-000"
              placeholder="CEP"
              className="cepInput"
            />

            <Input type="text" placeholder="Rua" widthPX={560} />

            <NumberAndComplementContainer>
              <Input type="number" placeholder="Número" widthPX={200} min={1} />
              <Input
                type="text"
                placeholder="Complemento"
                optional
                widthPX={348}
                minLength={0}
              />
            </NumberAndComplementContainer>

            <CityInformationsContainer>
              <Input type="text" placeholder="Bairro" widthPX={200} />
              <Input type="text" placeholder="Cidade" widthPX={276} />
              <Input
                type="text"
                placeholder="UF"
                widthPX={60}
                minLength={2}
                maxLength={2}
              />
            </CityInformationsContainer>
          </Form>
        </PersonalInformation>

        <PaymentInformationContainer>
          <HeaderInformation $colorIcon="purple">
            <div>
              <CurrencyDollar size={22} />
              <h1>Pagamento</h1>
            </div>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </HeaderInformation>

          <PaymentMethods>
            <PaymentButton>
              <CreditCard size={16} />
              <span>Cartão de Crédito</span>
            </PaymentButton>

            <PaymentButton>
              <Bank size={16} />
              <span>Cartão de Débito</span>
            </PaymentButton>

            <PaymentButton>
              <Money size={16} />
              <span>Dinheiro</span>
            </PaymentButton>
          </PaymentMethods>
        </PaymentInformationContainer>
      </DeliveryInformationContainer>

      <SelectedCoffeesContainer>
        <h1>Cafés selecionados</h1>
        <ContentShoppingCart>
          <OrdersContainer>
            {CoffeeList.map((item) => {
              return (
                <CoffeeCard key={item.id}>
                  <img src={item.imageURL} alt="" />

                  <div className="orderContainer">
                    <div className="orderHeader">
                      <span>{item.name}</span>
                      <strong>
                        {item.price.toLocaleString('pt-br', {
                          style: 'currency',
                          currency: 'BRL',
                        })}
                      </strong>
                    </div>

                    <div className="orderCommand">
                      <Input
                        type="number"
                        widthPX={70}
                        heightPX={32}
                        max={999}
                      />
                      <button type="button">
                        <Trash size={15} />
                        <span>Remover</span>
                      </button>
                    </div>
                  </div>
                </CoffeeCard>
              )
            })}
          </OrdersContainer>

          <SummationContainer>
            <div>
              <span>Total de itens</span>
              <span className="price">R$ 29,70</span>
            </div>

            <div>
              <span>Entrega</span>
              <span className="price">R$ 3,50</span>
            </div>

            <div>
              <strong>Total</strong>
              <strong>R$33,20</strong>
            </div>

            <button type="button">Confirmar Pedido</button>
          </SummationContainer>
        </ContentShoppingCart>
      </SelectedCoffeesContainer>
    </ShoppingCartContainer>
  )
}
