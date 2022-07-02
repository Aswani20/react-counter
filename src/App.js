import Counter from "./pages/counter/Counter";
import Home from "./pages/home";
import Shop from "./pages/shop/Shop";
import {BrowserRouter, Route ,Routes} from 'react-router-dom'
import NavbarComponent from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import Product from "./pages/shop/Product";
import NotFound from "./pages/notfound/NotFound"
import Todo from "./pages/todo/Todo"
import Register from "./pages/register/register";
import Login from "./pages/login/Login";


function App() {

  return (
    <div className="counter text-center">
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/counter" element={<Counter/>} />
          <Route path="/shop" element={ <Shop/>} />
          <Route path="/shop/:id" element={ <Product/>} />
          <Route path="/todo" element={ <Todo/>} />
          <Route path="/register" element={ <Register/>} />
          <Route path="/login" element={ <Login/>} />
          <Route path="*" element={ <NotFound/>} />
        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
