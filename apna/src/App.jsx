
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componentes/Header"
import Home from "./componentes/Home"
import Cart from "./componentes/Cart";
import ProductComponent from "./componentes/ProductComponent";

// import Footer from "./componentes/Footer";
// import { Toaster } from "react-hot-toast"
// import Main from "./componentes/Main";

//styles link import
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/product.scss"
import "./styles/card.scss"
import "./styles/cartitem.scss"
import "./styles/contact.scss"
import "./styles/footer.scss"


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/data/:id" element={<ProductComponent />} />

      </Routes>
      {/* <Toaster /> */}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
