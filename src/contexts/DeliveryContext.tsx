import { createContext, ReactNode, useState } from 'react'

interface CoffeeListType {
  id: string
  name: string
  quantity: number
}

interface DeliveryContextType {
  coffeeList: CoffeeListType[]
  setCurrentCoffeeList: (id: string, name: string, quantity: number) => void

  paymentMethod: string
  setCurrentPaymentMethod: (method: string) => void
}

export const DeliveryContext = createContext({} as DeliveryContextType)

interface DeliveryContextProviderProps {
  children: ReactNode
}

export function DeliveryContextProvider({
  children,
}: DeliveryContextProviderProps) {
  const [paymentMethod, setPaymentMethod] = useState('')

  const [coffeeList, setCoffeeList] = useState<CoffeeListType[]>([])

  function setCurrentPaymentMethod(method: string) {
    setPaymentMethod(method)
  }

  function setCurrentCoffeeList(id: string, name: string, quantity: number) {
    const alreadyExist = coffeeList.find((coffee) => coffee.id === id)

    if (alreadyExist) {
      const index = coffeeList.findIndex((coffee) => coffee.id === id)

      coffeeList[index] = { id, name, quantity }

      setCoffeeList(coffeeList)
      return
    }

    setCoffeeList([...coffeeList, { id, name, quantity }])
  }

  return (
    <DeliveryContext.Provider
      value={{
        coffeeList,
        setCurrentCoffeeList,
        paymentMethod,
        setCurrentPaymentMethod,
      }}
    >
      {children}
    </DeliveryContext.Provider>
  )
}