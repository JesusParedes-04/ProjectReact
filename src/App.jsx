import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./Components/Error404";
import Footer from "./Components/Footer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Experienciacofi from "./Components/Experienciacofi";
import CartContextProvider from "./Components/context/CartContext";
import Cart from "./Components/Cart";
import ThemeContextProvider from "./Components/context/ThemeContext";
import Checkout from "./Components/Checkout";
import ThankYouComponent from "./Components/ThankYouComponent";


function App() {

  return (
    <ThemeContextProvider>
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/experiencia"} element={<Experienciacofi mensaje={'Sumate a la experiencia Cofi'} />} />
          <Route path={"/category"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path={"/Thankyou/:id"} element={<ThankYouComponent />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  </ThemeContextProvider>
  )
}

export default App
