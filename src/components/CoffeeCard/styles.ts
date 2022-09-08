import { convertPixelToRem } from 'css-blocks-styled-components'
import styled from 'styled-components'

export const CardContainer = styled.div`
  width: ${convertPixelToRem(256)};
  height: ${convertPixelToRem(310)};

  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px 36px;

  margin-right: ${convertPixelToRem(32)};

  margin-bottom: ${convertPixelToRem(40)};

  img {
    display: flex;
    margin: 0 auto;
    margin-top: ${convertPixelToRem(-18)};
  }

  :hover {
    transform: scale(1.03);
    background: ${(props) => props.theme['gray-300']};
  }
`

export const CoffeeTypeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${convertPixelToRem(5)};
  margin: 0 ${convertPixelToRem(30)};
`

export const CoffeeType = styled.div`
  display: flex;
  justify-content: center;

  padding: 4px 8px;
  margin-top: ${convertPixelToRem(12)};

  width: ${convertPixelToRem(80)};
  height: ${convertPixelToRem(20)};

  background: ${(props) => props.theme['yellow-100']};
  border-radius: 100px;
`

export const TypeCoffee = styled.span`
  display: flex;

  font-weight: 700;
  font-size: ${convertPixelToRem(10)};
  line-height: 130%;

  text-transform: uppercase;

  color: ${(props) => props.theme['yellow-700']};
`

export const TitleName = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: ${convertPixelToRem(15)};

  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: ${convertPixelToRem(20)};
  line-height: 130%;
  color: ${(props) => props.theme['gray-800']};
`

export const Description = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 ${convertPixelToRem(20)};
  margin-top: ${convertPixelToRem(10)};

  font-family: 'Roboto';
  text-align: center;
  font-size: ${convertPixelToRem(14)};
  line-height: 130%;
  color: ${(props) => props.theme['gray-600']};
`
export const PurchaseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 ${convertPixelToRem(25)};
  margin-top: ${convertPixelToRem(35)};
`

export const Price = styled.div`
  color: ${(props) => props.theme['gray-700']};

  span {
    font-size: ${convertPixelToRem(14)};
    line-height: 130%;
    margin-right: ${convertPixelToRem(3)};
  }

  strong {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: ${convertPixelToRem(24)};
    line-height: 130%;
  }
`

export const Checkout = styled.div`
  display: flex;
  gap: ${convertPixelToRem(10)};

  input {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${convertPixelToRem(8)};
    gap: ${convertPixelToRem(4)};

    width: ${convertPixelToRem(72)};
    height: ${convertPixelToRem(38)};

    background: ${(props) => props.theme['gray-400']};

    border: 0;
    border-radius: 6px;

    ::-webkit-inner-spin-button {
      opacity: 1;
      width: ${convertPixelToRem(30)};
      height: ${convertPixelToRem(30)};

      cursor: pointer;
    }
  }

  a {
    padding: ${convertPixelToRem(8)};

    width: ${convertPixelToRem(38)};
    height: ${convertPixelToRem(38)};

    background: ${(props) => props.theme['purple-700']};
    color: ${(props) => props.theme.white};

    border: 0;
    border-radius: 6px;

    transition: background-color 0.5s;

    :hover {
      background: ${(props) => props.theme['purple-500']};
    }
  }
`
