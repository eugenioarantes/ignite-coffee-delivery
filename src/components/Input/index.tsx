import React from 'react'

import { InputContainer } from './styles'

interface InputProps {
  type: string
  placeholder?: string
  widthPX: number
  optional?: boolean
  min?: number
  minLength?: number
  maxLength?: number
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  widthPX = 200,
  optional = false,
  min = 1,
  minLength = 1,
  maxLength = 80,
}) => {
  return (
    <InputContainer
      min={min}
      minLength={minLength}
      maxLength={maxLength}
      type={type}
      placeholder={placeholder}
      $widthPX={widthPX}
      $optional
    />
  )
}
