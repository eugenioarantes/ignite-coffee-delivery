import { convertPixelToRem } from 'css-blocks-styled-components'
import styled, { css } from 'styled-components'

interface HeaderInformationProps {
  $colorIcon: string
}

export const ShoppingCartContainer = styled.div`
  display: flex;
  gap: ${convertPixelToRem(32)};
  margin: 0 10%;
`

export const DeliveryInformationContainer = styled.div`
  width: 60%;
`

export const PersonalInformation = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${convertPixelToRem(40)};
  gap: ${convertPixelToRem(32)};

  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px;
`

export const HeaderInformation = styled.div<HeaderInformationProps>`
  div {
    display: flex;
    align-items: center;
    gap: ${convertPixelToRem(8)};
    margin-bottom: ${convertPixelToRem(2)};

    svg {
      color: ${(props) => props.theme['yellow-700']};

      ${({ $colorIcon }) =>
        $colorIcon === 'purple' &&
        css`
          color: ${(props) => props.theme['purple-500']};
        `};
    }

    h1 {
      font-weight: 400;
      font-size: ${convertPixelToRem(16)};
      line-height: 130%;

      color: ${(props) => props.theme['gray-800']};
    }
  }

  span {
    margin-left: ${convertPixelToRem(30)};

    font-size: ${convertPixelToRem(14)};
    line-height: 130%;

    color: ${(props) => props.theme['gray-700']};
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  .cepInput {
    display: flex;
    padding: ${convertPixelToRem(12)};
    margin-bottom: ${convertPixelToRem(16)};

    width: ${convertPixelToRem(200)};

    height: ${convertPixelToRem(45)};

    background: ${(props) => props.theme['gray-250']};

    border: 1px solid ${(props) => props.theme['gray-400']};
    border-radius: 4px;

    ::placeholder {
      font-size: ${convertPixelToRem(15)};
      line-height: 130%;

      color: ${(props) => props.theme['gray-600']};
    }
  }
`

export const NumberAndComplementContainer = styled.div`
  display: flex;
  gap: ${convertPixelToRem(12)};
`

export const CityInformationsContainer = styled.div`
  display: flex;
  gap: ${convertPixelToRem(12)};
`

export const PaymentInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${convertPixelToRem(40)};
  margin: ${convertPixelToRem(12)} 0;

  gap: ${convertPixelToRem(32)};

  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px;
`

export const PaymentMethods = styled.div`
  display: flex;
  gap: ${convertPixelToRem(12)};
`

export const PaymentButton = styled.button`
  display: flex;
  align-items: center;
  padding: ${convertPixelToRem(16)};
  gap: ${convertPixelToRem(12)};

  width: ${convertPixelToRem(175)};
  height: ${convertPixelToRem(50)};

  background: ${(props) => props.theme['gray-400']};
  border: 0;
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  span {
    font-size: ${convertPixelToRem(12)};
    line-height: 160%;
    text-transform: uppercase;
    color: ${(props) => props.theme['gray-700']};
  }

  :focus {
    box-shadow: 0 0 0 1px ${(props) => props.theme['purple-500']};
  }
`

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${convertPixelToRem(40)};
  gap: ${convertPixelToRem(24)};

  width: 40%;

  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px 44px;
`

export const OrdersContainer = styled.div`
  height: ${convertPixelToRem(200)};
  background: wheat;
  overflow: scroll;
`

export const CoffeeCard = styled.div`
  display: flex;

  img {
    width: ${convertPixelToRem(64)};
    height: ${convertPixelToRem(64)};
  }

  .orderContainer {
    display: flex;
    flex-direction: column;
  }

  .orderHeader {
    display: flex;
    justify-content: space-between;
  }

  .orderCommand {
    display: flex;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0px 8px;
      gap: 4px;

      width: 91px;
      height: 32px;

      background: #e6e5e5;
      border: 0;
      border-radius: 6px;

      font-size: ${convertPixelToRem(12)};
      line-height: 160%;

      text-transform: uppercase;

      color: ${(props) => props.theme['gray-700']};
    }
  }
`

export const SummationContainer = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    margin-bottom: ${convertPixelToRem(12)};
  }

  span {
    font-size: ${convertPixelToRem(14)};
    line-height: 130%;
    color: ${(props) => props.theme['gray-700']};
  }

  .price {
    font-size: ${convertPixelToRem(16)};
  }

  strong {
    font-size: ${convertPixelToRem(20)};
    line-height: 130%;

    color: ${(props) => props.theme['gray-800']};
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${convertPixelToRem(12)} ${convertPixelToRem(8)};
    margin-top: ${convertPixelToRem(24)};

    width: 100%;
    height: ${convertPixelToRem(45)};

    background: ${(props) => props.theme['yellow-500']};
    border: 0;
    border-radius: 6px;

    font-weight: 700;
    font-size: ${convertPixelToRem(14)};
    line-height: 160%;

    text-transform: uppercase;

    color: ${(props) => props.theme.white};

    transition: background-color 0.5s;

    :hover {
      background: ${(props) => props.theme['yellow-700']};
    }
  }
`