import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import Credentials from "./Components/Credentials";
import Home from "./Components/Home";
import Modal from "./Components/Modal";
import NavMob from "./Components/NavMob";

function App() {
  const { isOpen } = useSelector((store) => store.cart);
  document.body.style.overflow = isOpen ? "hidden" : "auto";
  return (
    <div className="App">
      {isOpen && <Modal />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cred" element={<Credentials />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
