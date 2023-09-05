import React from 'react'
import NavBar from './component/NavBar/NavBar'
import Content from './component/Content/Content'
import Banner from './component/Banner/Banner'
import ProductList from './component/ProductList/ProductList'
const App = () => {
  
  return (
      <div>
        <NavBar />
        <Content/>
        <Banner/>
        <ProductList/>
      </div>
  )
}

export default App

