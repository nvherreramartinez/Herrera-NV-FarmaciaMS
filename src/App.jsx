import './App.css'
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/ItemListContainer'
function App(){

 return(
  <div><NavbarComponent/>
  <ItemListContainer greeting= 'Bienvenido a la Farmacia del Ministerio' texto= 'Servicios on line.'/></div>
 )
} 

export default App
