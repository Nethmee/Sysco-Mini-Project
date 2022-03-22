import Footer from './components/shared components/footer/footer';
import Header from './components/shared components/header/header';
import Home from './components/pages/home/home';
import Products  from './components/pages/productsDisplay/products';
import Cat01  from './components/pages/Cat01/Cat01';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import './App.css';


/* const Pg = ()=>{

  return <div>PageoNe</div>
} */

function App() {
  return (
    <div className="app-container">
    
   <Header/>
   <Routes>

  <Route path="/"  exact  element={<Home/>}/>
  <Route path="/All"  exact element={<Products/>}/>
  <Route path="/Cat01" exact element={<Cat01/>}/>
  </Routes>
  <Footer/>
    
   
           
          
    


     
   
   


 
    </div>
  );
}

export default App;
