import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


import { BrowserRouter, Routes, Route } from "react-router-dom";
/* import Cart from "./components/cart"; */
import ItemDetailContainer from "./components/itemDetailContainer";
import ItemlistContainer from "./components/itemListContainer";
import NavBar from "./components/navbar";

const App=() => {
  return ( 
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route  path='/' element = {<ItemlistContainer />}/>
          <Route  path='/categoria/:categoriaId' element = {<ItemlistContainer />}/>
          {/* <Route  path='/cart' element  ={ <Cart />}/> */}
          <Route  path='/detalle/:detalleId' element = {<ItemDetailContainer />}/>
        </Routes>


      </BrowserRouter>
    </>
  );
}

export default App;
