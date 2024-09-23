import React from 'react'
import ReactDOM from 'react-dom/client'
import{
  BrowserRouter , Routes ,Route
} from 'react-router-dom'
import {AppProvider} from './context.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import BookList from './Components/BookList/BookList.jsx'
import BookDetails from './Components/BookDetails/BookDetails.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
  <BrowserRouter>
  <Routes>
     <Route path ='/' element ={<Home/>}>
          <Route path = "about" element = {<About />} />
          <Route path = "book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<BookDetails />} />

     </Route>
  </Routes>
  </BrowserRouter>
  </AppProvider>
)
