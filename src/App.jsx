import './App.css';
import Button from "./components/Button";
import ProductCard from "./components/ProductCard";
import Counter from "./components/Counter";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import House from './pages/house';
import Pro from './pages/Pro';


function App() {

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/hello" element={<House/>}/>
            <Route path="/hi" element={<Pro/>} />
            
        </Routes>
        </BrowserRouter> 
    );
}


//function App() {
  //const products= [
    //{
     // name: "Laptop",
     // price: 50000,
    //},
   // {
      //name: "Mobile",
     // price: 70000,
   // },
 // ];

  //return (
    //<>
     // <h1>Anjali</h1>
     // <Button/>
     // <Button/>
     // {products.map((products) => (
       // <ProductCard name={products.name} price={products.price}
       // />
    //  ))}
     // {/* <ProductCard name="Laptop" price={50000}/>
      // <ProductCard name="Mobile" price={70000}/> */}
      // <Counter />
      // </>
 // );
//}

export default App;
       
