import { Route, Routes } from "react-router"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import About from "./pages/About"
import Cart from "./pages/Cart"
import Product from "./pages/Product"
import PlaceOrder from "./pages/PlaceOrder"
import Account from "./pages/Account"
import Orders from "./pages/Orders"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/order" element={<Orders/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="/place-order" element={<PlaceOrder/>} />
      <Route path="/account" element={<Account/>} />
    </Routes>
  )

}

export default App
