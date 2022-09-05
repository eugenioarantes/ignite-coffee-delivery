import { convertPixelToRem } from 'css-blocks-styled-components'
import styled, { css } from 'styled-components'

interface InformationIconsColorProps {
  $backgroundColor: 'yellow-700' | 'gray-700' | 'yellow-500' | 'purple-500'
}

export const Container = styled.div`
  .shadow {
    position: absolute;
    width: 100%;
    top: 80px;
  }
`

export const HomeContainer = styled.div`
  margin: 0 10%;
  margin-top: ${convertPixelToRem(90)};

  .coffeeTitle {
    margin-top: ${convertPixelToRem(130)};
    margin-bottom: ${convertPixelToRem(35)};

    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: ${convertPixelToRem(32)};
    line-height: 130%;

    color: ${(props) => props.theme['gray-800']};
  }
`

export const HomeSubHeaderContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;

  .homeMainCoffeImage {
    margin-left: auto;
  }
`

export const HomeInformations = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: ${convertPixelToRem(48)};
    line-height: 130%;
    color: ${(props) => props.theme['gray-900']};
  }

  span {
    font-size: ${convertPixelToRem(20)};
    line-height: 130%;
    color: ${(props) => props.theme['gray-800']};

    margin-top: ${convertPixelToRem(16)};
  }
`

export const CoffeeInformations = styled.div`
  margin-top: ${convertPixelToRem(65)};

  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const InformationContentContainer = styled.div<InformationIconsColorProps>`
  display: flex;
  align-items: center;
  margin-bottom: ${convertPixelToRem(20)};

  svg {
    width: ${convertPixelToRem(35)};
    height: ${convertPixelToRem(35)};

    padding: ${convertPixelToRem(8)};

    flex-shrink: 0;

    ${({ $backgroundColor }) =>
      css`
        background: ${(props) => props.theme[$backgroundColor]};
      `};

    color: white;
    border-radius: 50%;
  }

  span {
    margin-left: ${convertPixelToRem(12)};
    margin-bottom: ${convertPixelToRem(12)};
    font-size: ${convertPixelToRem(16)};
    line-height: 130%;
    color: ${(props) => props.theme['gray-700']};
  }
`
export const CoffeeListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`
