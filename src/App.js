import './App.css';
import NavBar from './components/navBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './container/itemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import ItemDetailContainer from './container/itemDetailContainer/ItemDetailContainer';
import Cart from './components/cart/Cart';
import CartContext from './context/CartContext';

function App() {
  
  return (
    <div >
      <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"/>
      </div>
      <CartContext>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<h1>No Existe esta pagina</h1>}/>
          </Routes>
        </BrowserRouter>
      </CartContext>
    </div>
  );
}

export default App;
