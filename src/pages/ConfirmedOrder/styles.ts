import { convertPixelToRem } from 'css-blocks-styled-components'
import styled, { css } from 'styled-components'

interface IconProps {
  $colorIcon: 'purple-500' | 'yellow-500' | 'yellow-700'
}

export const Container = styled.div`
  display: flex;
  margin: 0 10%;
  margin-top: ${convertPixelToRem(80)};
  gap: ${convertPixelToRem(100)};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: ${convertPixelToRem(32)};
    line-height: 130%;

    color: ${(props) => props.theme['yellow-700']};
  }

  span {
    margin-top: ${convertPixelToRem(4)};

    font-size: ${convertPixelToRem(20)};
    line-height: 130%;

    color: ${(props) => props.theme['gray-800']};
  }
`
export const DeliveryDataContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: ${convertPixelToRem(40)};

  box-sizing: border-box;

  align-items: flex-start;
  padding: ${convertPixelToRem(40)};
  gap: ${convertPixelToRem(32)};

  width: 526px;
  height: 270px;

  border: 1px solid black;
  border-radius: 6px 36px;

  /* background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%); */
`

export const InformationsData = styled.div`
  display: flex;
  align-items: center;
  gap: ${convertPixelToRem(12)};

  div {
    display: flex;
    flex-direction: column;
  }

  span,
  strong {
    font-size: ${convertPixelToRem(16)};
    line-height: 130%;

    color: ${(props) => props.theme['gray-700']};
  }
`

export const Icon = styled.div<IconProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${convertPixelToRem(8)};
  gap: ${convertPixelToRem(8)};

  color: ${(props) => props.theme.white};
  border-radius: 50%;

  ${({ $colorIcon }) =>
    css`
      background: ${(props) => props.theme[$colorIcon]};
    `};
`
