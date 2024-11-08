
import './App.css'
import Product from './product';
// import Login from './Login'
// import { users } from "./Login";

function App() {
  const Buzdolabi = "Buzdolabi";
  // değişkeni şekilli parantez içinde altta verdik onuda productName diye isimlendirerek prop olarak atadık

  return (
    <div>
      <Product productName="pantlon" price={1110}/>
      <hr></hr>

      <Product productName="Ayakkabı" price={700}/>
      <hr></hr>
      <Product productName={Buzdolabi} price={10000} />
    </div>
  )
}
export default App
