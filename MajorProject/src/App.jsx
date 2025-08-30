import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router'
import Home from './components/Home'
import RestaurantOptions from './components/RestaurantOptions'
import RestaurantMenu from './components/RestaurantMenu'
import SearchFood from "./components/SearchFood"
import SecondaryHome from './components/SecondaryHome'
import {Provider} from 'react-redux'
import { store } from './Store/Stores'
import Checkout from './components/Checkout'
import Genie from './components/Genie'


function App(){


      return(

            <>
            <Provider store={store}>
                  <BrowserRouter>
                  <Routes>
                        <Route path='/' element={<Home/>}></Route>
                        <Route element={<SecondaryHome/>}>
                            <Route path='/restaurant' element={<RestaurantOptions/>}></Route>
                            <Route path='/city/delhi/:id' element={<RestaurantMenu/>}></Route>
                            <Route path='/city/delhi/:id/search' element={<SearchFood/>}></Route>
                        </Route>
                        <Route path='/checkout' element={<Checkout/>}></Route>
                        <Route path='/genie' element={<Genie/>}></Route>
                  </Routes>
                  </BrowserRouter>
            </Provider>

            
            </>
      )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)