import { Route, Routes } from 'react-router-dom'
import Home from './components/routes/Home'
import ProductDetail from './components/routes/ProductDetail'
import Login from './components/routes/Login'
import Purchases from './components/routes/Purchases'
import Header from './components/shared/Header'
import Cart from './components/routes/Cart'
import ProtectedRoutes from './components/routes/ProtectedRoutes'
import { useDispatch } from 'react-redux'
import { getAllProducts } from './store/slices/products.slice'
import { useEffect } from 'react'
import axios from 'axios'



  // const dispatch = useDispatch()

  // useEffect(() => {
  //   const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
  //   const  obj = {
  //     'firstName': 'Edison',
  //     'lastName': 'Parra',
  //     'email': 'edison.parra@academlo.com',
  //     'password': 'pass1234',
  //     'phone': '1234567890',
  //     'role': 'admin',
  //   }
  //   axios.post(URL, obj)
  //    .then(res => console.log(res.data))
  //    .catch(err => console.log(err))
  // }, [])
  // useEffect(() => {
  //   dispatch(getAllProducts()) 
  // }, [])

  function App() {

    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(getAllProducts())
    }, [])
  
    return (
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/purchases' element={<Purchases />} />
            <Route path='/cart' element={<Cart />} />
          </Route>
        </Routes>
      </div>
    )
  }
  
  export default App
  