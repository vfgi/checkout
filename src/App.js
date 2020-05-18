import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './utils/globalStyle'

import Header from './components/Organisms/Header'

import Routes from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes />
    </BrowserRouter>
  )
}

export default App