import { convertPixelToRem } from 'css-blocks-styled-components'
import styled, { css } from 'styled-components'

interface InputProps {
  $widthPX: number
  $heightPX: number
  $optional: boolean
  $inputType: string
  $background: 'gray-250' | 'gray-400'
}

export const InputContainer = styled.input<InputProps>`
  display: flex;
  padding: ${convertPixelToRem(8)};

  ${({ $widthPX }) =>
    css`
      width: ${convertPixelToRem($widthPX)};
    `};

  ${({ $heightPX }) =>
    css`
      height: ${convertPixelToRem($heightPX)};
    `};

  ${({ $background }) =>
    css`
      background: ${(props) => props.theme[$background]};
    `};

  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 4px;

  ::placeholder {
    font-size: ${convertPixelToRem(15)};
    line-height: 130%;
    color: ${(props) => props.theme['gray-600']};
  }

  ${({ $inputType }) =>
    $inputType === 'number' &&
    css`
      ::-webkit-inner-spin-button {
        opacity: 1;
        width: ${convertPixelToRem(30)};
        height: ${convertPixelToRem(30)};
        cursor: pointer;
      }
    `};
`
