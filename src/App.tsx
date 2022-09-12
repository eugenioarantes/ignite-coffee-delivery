import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { DeliveryContextProvider } from './contexts/DeliveryContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <DeliveryContextProvider>
          <Router />
        </DeliveryContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
