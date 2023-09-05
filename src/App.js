import React from 'react'
import NavBar from './component/NavBar/NavBar'
import Content from './component/Content/Content'
import store from './Redux/store'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { changeShow } from './Redux/features/show'
import Banner from './component/Banner/Banner'
const App = () => {
  const dispatch = useDispatch()
  const show = useSelector( state => state.showSlider.show)
  return (
      <div>
        <NavBar />
        <Content/>
        <Banner/>
      </div>
  )
}

export default App

