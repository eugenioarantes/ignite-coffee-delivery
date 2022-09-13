import React, { useContext, FocusEvent } from 'react'
import { Field, FieldAttributes } from 'formik'

import { DeliveryContext } from '../../contexts/DeliveryContext'
import { useToggle } from '../../hooks/toggle'

import { InputContainer, Error, Container } from './styles'

interface InputProps extends FieldAttributes<any> {
  error?: string
  touched?: boolean
  blur?: (event: FocusEvent) => void
  type: string
  placeholder?: string
  widthPX: number
  heightPX?: number
  optional?: boolean
  min?: number
  max?: number
  minLength?: number
  maxLength?: number
  defaultValue?: string | number
  onChange?: (id: string, name: string, quantity: number) => void
  coffeeData?: { id: string; name: string }
  padding?: number
  background?: 'gray-250' | 'gray-400'
  marginBottom?: number
  pattern?: string
}

export const Input: React.FC<InputProps> = ({
  error,
  touched,
  blur,
  type = 'text',
  placeholder = '',
  widthPX = 200,
  heightPX = 45,
  optional = false,
  min = 1,
  max,
  minLength = 1,
  maxLength = 80,
  defaultValue,
  coffeeData,
  onChange,
  padding = 12,
  background = 'gray-250',
  marginBottom = 0,
  pattern,
  ...rest
}) => {
  const { removeOrderFromList } = useContext(DeliveryContext)

  function handleSetCoffeeOnList(coffeQuantity: string): void {
    if (!onChange || !coffeeData) return

    const coffeeQuantityNumber = Number(coffeQuantity)

    onChange(coffeeData.id, coffeeData.name, coffeeQuantityNumber)

    if (coffeeQuantityNumber === 0) {
      removeOrderFromList(coffeeData.id)
    }
  }

  const { turnOn: handleFocus, turnOff: handleFocusOff } = useToggle()

  const errored = error && touched

  const handleBlur = (event: FocusEvent): void => {
    handleFocusOff()

    if (blur) blur(event)
  }

  return (
    <Container>
      <InputContainer
        $widthPX={widthPX}
        $heightPX={heightPX}
        $optional
        $inputType={type}
        $padding={padding}
        $background={background}
        $marginBottom={marginBottom}
      >
        <Field
          min={min}
          max={max}
          minLength={minLength}
          maxLength={maxLength}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={(event: any) => handleSetCoffeeOnList(event.target.value)}
          onFocus={handleFocus}
          onBlur={(event: FocusEvent) => handleBlur(event)}
          {...rest}
        />
      </InputContainer>
      <Error>{errored ? error : ''}</Error>
    </Container>
  )
}
