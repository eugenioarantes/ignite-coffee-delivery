import React from 'react'

import { InputContainer } from './styles'

interface InputProps {
  type: string
  placeholder?: string
  widthPX: number
  heightPX?: number
  optional?: boolean
  min?: number
  max?: number
  minLength?: number
  maxLength?: number
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  widthPX = 200,
  heightPX = 45,
  optional = false,
  min = 1,
  max,
  minLength = 1,
  maxLength = 80,
}) => {
  return (
    <InputContainer
      min={min}
      max={max}
      minLength={minLength}
      maxLength={maxLength}
      type={type}
      placeholder={placeholder}
      $widthPX={widthPX}
      $heightPX={heightPX}
      $optional
      $inputType={type}
    />
  )
}
