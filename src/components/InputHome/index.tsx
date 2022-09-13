import React from 'react'

import { InputContainer } from './styles'

interface InputHomeProps {
  type: string
  widthPX: number
  heightPX?: number
  background?: 'gray-250' | 'gray-400'
  min?: number
  max?: number
  defaultValue?: string | number
  onChange?: (id: string, name: string, quantity: number) => void
  coffeeData?: { id: string; name: string }
}

export const InputHome: React.FC<InputHomeProps> = ({
  type = 'text',
  widthPX = 200,
  heightPX = 45,
  background = 'gray-400',
  min = 1,
  max,
  defaultValue,
  coffeeData,
  onChange,
}) => {
  function handleSetCoffeeOnList(coffeQuantity: string): void {
    if (!onChange || !coffeeData) return

    const coffeeQuantityNumber = Number(coffeQuantity)

    onChange(coffeeData.id, coffeeData.name, coffeeQuantityNumber)
  }

  return (
    <InputContainer
      min={min}
      max={max}
      type={type}
      $background={background}
      $widthPX={widthPX}
      $heightPX={heightPX}
      $optional
      $inputType={type}
      defaultValue={defaultValue}
      onChange={(event: any) => handleSetCoffeeOnList(event.target.value)}
    />
  )
}
