import { useState, useCallback } from 'react'

interface UseToggle {
  isOn: boolean
  toggle: () => void
  turnOn: () => void
  turnOff: () => void
}

export function useToggle(defaultState = false): UseToggle {
  const [isOn, setIsOn] = useState(defaultState)

  const toggle = useCallback(
    () => setIsOn((pastVisibility) => !pastVisibility),
    [],
  )

  const turnOn = useCallback(() => setIsOn(true), [])

  const turnOff = useCallback(() => setIsOn(false), [])

  return {
    isOn,
    toggle,
    turnOn,
    turnOff,
  }
}
