import Counter from "./pages/counter/Counter";
import Home from "./pages/home";
import About from "./pages/about/About";
import Shop from "./pages/shop/Shop";
import {BrowserRouter, Route ,Routes} from 'react-router-dom'
import NavbarComponent from "./component/navbar/Navbar";
import Product from "./pages/shop/Product";
import NotFound from "./pages/notfound/NotFound"
import Todo from "./pages/todo/Todo"


function App() {

  return (
    <div className="counter text-center">
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/counter" element={<Counter/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/shop" element={ <Shop/>} />
          <Route path="/shop/:id" element={ <Product/>} />
          <Route path="/todo" element={ <Todo/>} />
          <Route path="*" element={ <NotFound/>} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
