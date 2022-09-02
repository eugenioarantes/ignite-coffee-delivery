import { convertPixelToRem } from 'css-blocks-styled-components'
import styled, { css } from 'styled-components'

interface ButtonContainerProps {
  $color: 'purple' | 'yellow'
}

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: ${convertPixelToRem(105)};
  padding: ${convertPixelToRem(32)} 0;
`

export const NavContainer = styled.nav`
  display: flex;
  gap: ${convertPixelToRem(12)};

  a {
    text-decoration: none;
    background: ${(props) => props.theme['purple-100']};
    padding: ${convertPixelToRem(8)};
    border-radius: 6px;
  }
`

export const ButtonContainer = styled.div<ButtonContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${convertPixelToRem(4)};

  svg {
    transition: color 0.5s;
    width: ${convertPixelToRem(22)};
    height: ${convertPixelToRem(22)};

    color: ${(props) => props.theme['purple-700']};

    ${({ $color }) =>
      $color === 'yellow' &&
      css`
        color: ${(props) => props.theme['yellow-700']};
      `};
  }

  span {
    transition: color 0.5s;
    color: ${(props) => props.theme['purple-700']};
  }

  :hover {
    svg,
    span {
      color: ${(props) => props.theme['purple-500']};

      ${({ $color }) =>
        $color === 'yellow' &&
        css`
          color: ${(props) => props.theme['yellow-600']};
        `};
    }
  }
`
