import './App.css';
import NavBar from './components/navBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './container/itemListContainer/ItemListContainer';

function App() {

  
  return (
    <div>
      <NavBar/>
      <ItemListContainer
        greeting={"Bienvenidos"}/>
    </div>
  );
}

export default App;
