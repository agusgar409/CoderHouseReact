import './App.css';
import NavBar from './components/navBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './container/itemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  
  
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='*' element={<h1>No Existe esta pagina</h1>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
