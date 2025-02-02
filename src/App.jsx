import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Blogs from './Pages/Blogs'
import Cart from './Pages/Cart'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/about us" element={<AboutUs/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path='cart' element={<Cart/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
