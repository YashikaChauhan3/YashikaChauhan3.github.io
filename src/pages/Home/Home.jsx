import React from 'react'
import Header from '../../Components/Header/Header.jsx'
import {Outlet} from 'react-router-dom'

const Home = () => {
  return (
    <main>
        <Header />
        <Outlet />   
    </main>
  )
}
//outlet acts as a placeholder for where the child components should be renderd in nested routing structure 

export default Home
