import { createContext, ReactNode, useState } from 'react'

interface CoffeeListType {
  id: string
  name: string
  quantity: number
}

export interface AddressType {
  CEP: string
  street: string
  number: number
  complement?: string
  neighborhood: string
  city: string
  UF: string
}

interface DeliveryContextType {
  coffeeList: CoffeeListType[]
  setCurrentCoffeeList: (id: string, name: string, quantity: number) => void

  paymentMethod: string
  setCurrentPaymentMethod: (method: string) => void

  removeOrderFromList: (id: string) => void

  address: AddressType
  setClientAddress: (address: AddressType) => void
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

  const [address, setAddress] = useState({} as AddressType)

  function setClientAddress(adress: AddressType) {
    setAddress(adress)
  }

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

  function removeOrderFromList(id: string): void {
    const itemToRemove = coffeeList.find((coffee) => coffee.id === id)

    const newCoffeeList = coffeeList.filter(
      (item) => item.id !== itemToRemove?.id,
    )

    setCoffeeList(newCoffeeList)
  }

  return (
    <DeliveryContext.Provider
      value={{
        coffeeList,
        setCurrentCoffeeList,
        paymentMethod,
        setCurrentPaymentMethod,
        removeOrderFromList,
        address,
        setClientAddress,
      }}
    >
      {children}
    </DeliveryContext.Provider>
  )
}
