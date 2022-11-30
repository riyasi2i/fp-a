import React from 'react'
import { Routes,Route } from 'react-router-dom' 
import Footer from '../layouts/MainLayout/Footer'
import Header from '../layouts/MainLayout/Header'
import MainLayout from '../layouts/MainLayout/MainLayout'
import PrivateRoute from './PrivateRoute'

function AppRoutes() {
  return (
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route path='/header' element={<Header/>} />
                <Route path='/private' element={
                  <PrivateRoute >
                    <Footer/>
                  </PrivateRoute>
                }
                />
            </Route>
        </Routes>
  )
}

export default AppRoutes