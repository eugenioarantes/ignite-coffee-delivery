import { convertPixelToRem } from 'css-blocks-styled-components'
import styled, { css } from 'styled-components'

interface InputProps {
  $widthPX: number
  $heightPX: number
  $optional: boolean
  $inputType: string
  $padding: number
  $background: 'gray-250' | 'gray-400'
  $marginBottom: number
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const InputContainer = styled.div<InputProps>`
  display: flex;
  input {
    margin-bottom: ${convertPixelToRem(16)};

    ${({ $marginBottom }) =>
      css`
        margin-bottom: ${convertPixelToRem($marginBottom)};
      `};
    ${({ $widthPX }) =>
      css`
        width: ${convertPixelToRem($widthPX)};
      `};

    ${({ $heightPX }) =>
      css`
        height: ${convertPixelToRem($heightPX)};
      `};

    ${({ $padding }) =>
      css`
        padding: ${convertPixelToRem($padding)};
      `};

    ${({ $background }) =>
      css`
        background: ${(props) => props.theme[$background]};
      `};

    border: 1px solid ${(props) => props.theme['gray-400']};
    border-radius: 5px;

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
  }
`

export const Error = styled.small`
  color: red;
  padding-left: ${convertPixelToRem(16)};
`
