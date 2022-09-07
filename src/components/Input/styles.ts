import { convertPixelToRem } from 'css-blocks-styled-components'
import styled, { css } from 'styled-components'

interface InputProps {
  $widthPX: number
  $heightPX: number
  $optional: boolean
}

export const InputContainer = styled.input<InputProps>`
  display: flex;
  padding: ${convertPixelToRem(12)};
  margin-bottom: ${convertPixelToRem(16)};

  ${({ $widthPX }) =>
    css`
      width: ${convertPixelToRem($widthPX)};
    `};

  ${({ $heightPX }) =>
    css`
      height: ${convertPixelToRem($heightPX)};
    `};

  background: ${(props) => props.theme['gray-250']};

  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 4px;

  ::placeholder {
    font-size: ${convertPixelToRem(15)};
    line-height: 130%;

    color: ${(props) => props.theme['gray-600']};
  }
`
