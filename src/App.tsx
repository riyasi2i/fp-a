import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import AppRoutes from './routes/AppRoutes'

function App() {
  let name;
  return (
      <BrowserRouter>
          <AppRoutes/>
      </BrowserRouter> 

  )
}

export default App