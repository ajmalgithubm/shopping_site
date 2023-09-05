import React from 'react'
import NavBar from './component/NavBar/NavBar'
import Content from './component/Content/Content'
import store from './Redux/store'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { changeShow } from './Redux/features/show'
const App = () => {
  const dispatch = useDispatch()
  const show = useSelector( state => state.showSlider.show)
  return (
      <div>
        <NavBar />
        <Content/>
      </div>
  )
}

export default App

