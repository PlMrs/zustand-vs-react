import React, { FC } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App.tsx'
import './index.css'
import { ZustandA } from './pages/ZustandA.tsx'
import { ZustandB } from './pages/ZustandB.tsx'
import { ReduxA } from './pages/ReduxA.tsx'
import { ReduxB } from './pages/ReduxB.tsx'
import { store } from './hooks/redux/redux.store.ts'


const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<App />} />
        <Route path='/zustandA' element={<ZustandA />} />
        <Route path='/zustandB' element={<ZustandB />} />
        <Route path='/reduxA' element={<ReduxA />} />
        <Route path='/reduxB' element={<ReduxB />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Pour Redux, besoin de Provider */}
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
)
