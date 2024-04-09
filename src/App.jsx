import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Cart, Home, ProductDetails } from "./pages"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Footer from "./components/Footer"


const App = () => {
  return (
    <div>
  <Router>
  <Header/>
      <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
          <Route path='/cart' element= {<Cart/>}/>
      </Routes>
      <Sidebar/>
      <Footer />
     </Router>
    </div>
  )
}

export default App