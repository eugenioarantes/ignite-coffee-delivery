import React, { useCallback, useContext } from 'react'

import { IMaskInput } from 'react-imask'
import * as Yup from 'yup'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import {
  AddressInformation,
  CityInformationsContainer,
  CoffeeCard,
  ContentShoppingCart,
  DeliveryInformationContainer,
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
import { DeliveryContext } from '../../contexts/DeliveryContext'
import { Formik } from 'formik'
import { validateFormData } from '../../utils/formValidation'
import { Navigate } from 'react-router-dom'
import { InputHome } from '../../components/InputHome'

interface AddressFormData {
  CEP: string
  street: string
  number: number
  neighborhood: string
  city: string
  UF: string
}

const FORM_INITIAL_VALUES = {
  CEP: '',
  street: '',
  number: 0,
  neighborhood: '',
  city: '',
  UF: '',
}

const validator = Yup.object().shape({
  CEP: Yup.string().required('CEP Obrigatório'),
  street: Yup.string().required('Obrigatório preencher a sua rua'),
  number: Yup.number().required('Obrigatório preencher o número'),
  neighborhood: Yup.string().required('Obrigatório preencher seu bairro'),
  city: Yup.string().required('Obrigatório preencher a sua cidade'),
  UF: Yup.string().required('Obrigatório preencher seu estado'),
})

export const ShoppingCart: React.FC = () => {
  const {
    coffeeList,
    paymentMethod,
    setCurrentPaymentMethod,
    setCurrentCoffeeList,
    removeOrderFromList,
  } = useContext(DeliveryContext)

  function setCoffeeOnList(id: string, name: string, quantity: number): void {
    setCurrentCoffeeList(id, name, quantity)
  }

  const handleSubmit = useCallback(async (formData: AddressFormData) => {
    const { hasError } = await validateFormData(validator, formData)

    if (hasError) return
    ;<Navigate to="/confirmed-order" />
  }, [])

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      validationSchema={validator}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({ errors, touched, handleBlur }) => (
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

              <AddressInformation>
                <IMaskInput
                  mask="00.000-000"
                  placeholder="CEP"
                  className="cepInput"
                  minLength={10}
                  maxLength={10}
                  // error={errors.CEP}
                  // touched={touched.CEP}
                  // blur={handleBlur}
                />

                <Input
                  type="text"
                  id="rua"
                  name="rua"
                  placeholder="Rua"
                  widthPX={560}
                  marginBottom={16}
                  error={errors.street}
                  touched={touched.street}
                  blur={handleBlur}
                />

                <NumberAndComplementContainer>
                  <Input
                    type="number"
                    id="numero"
                    name="numero"
                    placeholder="Número"
                    widthPX={200}
                    min={1}
                    marginBottom={16}
                    error={errors.number}
                    touched={touched.number}
                    blur={handleBlur}
                  />
                  <Input
                    type="text"
                    id="complemento"
                    name="complemento"
                    placeholder="Complemento"
                    optional
                    widthPX={348}
                    minLength={0}
                    marginBottom={16}
                    blur={handleBlur}
                  />
                </NumberAndComplementContainer>

                <CityInformationsContainer>
                  <Input
                    type="text"
                    id="bairro"
                    name="rua"
                    placeholder="Bairro"
                    widthPX={200}
                    error={errors.neighborhood}
                    touched={touched.neighborhood}
                    blur={handleBlur}
                  />
                  <Input
                    type="text"
                    id="cidade"
                    name="cidade"
                    placeholder="Cidade"
                    widthPX={276}
                    error={errors.city}
                    touched={touched.city}
                    blur={handleBlur}
                  />
                  <Input
                    // pattern="/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/"
                    type="text"
                    id="uf"
                    name="uf"
                    placeholder="UF"
                    widthPX={60}
                    minLength={2}
                    maxLength={2}
                    error={errors.UF}
                    touched={touched.UF}
                    blur={handleBlur}
                  />
                </CityInformationsContainer>
              </AddressInformation>
            </PersonalInformation>

            <PaymentInformationContainer>
              <HeaderInformation $colorIcon="purple">
                <div>
                  <CurrencyDollar size={22} />
                  <h1>Pagamento</h1>
                </div>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </HeaderInformation>

              <PaymentMethods>
                <PaymentButton
                  type="button"
                  onClick={() => setCurrentPaymentMethod('credito')}
                  $isSelected={paymentMethod === 'credito'}
                >
                  <CreditCard size={16} />
                  <span>Cartão de Crédito</span>
                </PaymentButton>

                <PaymentButton
                  type="button"
                  onClick={() => setCurrentPaymentMethod('debito')}
                  $isSelected={paymentMethod === 'debito'}
                >
                  <Bank size={16} />
                  <span>Cartão de Débito</span>
                </PaymentButton>

                <PaymentButton
                  type="button"
                  onClick={() => setCurrentPaymentMethod('dinheiro')}
                  $isSelected={paymentMethod === 'dinheiro'}
                >
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
                {coffeeList.map((item) => {
                  const positionOnArray = Number(item.id) - 1
                  return (
                    <CoffeeCard key={item.id}>
                      <img src={CoffeeList[positionOnArray].imageURL} alt="" />

                      <div className="orderContainer">
                        <div className="orderHeader">
                          <span>{item.name}</span>
                          <strong>
                            {CoffeeList[positionOnArray].price.toLocaleString(
                              'pt-br',
                              {
                                style: 'currency',
                                currency: 'BRL',
                              },
                            )}
                          </strong>
                        </div>

                        <div className="orderCommand">
                          <InputHome
                            type="number"
                            widthPX={70}
                            heightPX={32}
                            background="gray-250"
                            max={999}
                            defaultValue={item.quantity}
                            onChange={setCoffeeOnList}
                            coffeeData={{ id: item.id, name: item.name }}
                          />
                          <button
                            type="button"
                            onClick={() => removeOrderFromList(item.id)}
                          >
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

                <button type="submit">Confirmar Pedido</button>
              </SummationContainer>
            </ContentShoppingCart>
          </SelectedCoffeesContainer>
        </ShoppingCartContainer>
      )}
    </Formik>
  )
}
