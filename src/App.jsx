import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
/* import Title from "./components/navbar/title"; */
import ItemlistContainer from "./components/container/itemlisContainer";
import { useState, useEffect } from "react";





const App = ({ textoDeBusqueda }) => {
  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    //cuando ya se creo logiaimportante
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${textoDeBusqueda}`)
      .then((response) => response.json())
      .then((data) => {
        setProductos(data.results);
      });
  }, [textoDeBusqueda]);
  console.log(productos);
  console.log("por renderizar");

  //se hacen validaciones

  return (

    
    <div className="App">
      <NavBar carritoLenght={carrito.length} />
      {/* <Title msj="Hello" color="Green"> */}

      <div>
        <h3>Poducto random</h3>
        <div>
          <button


            onClick={() => {
              setCarrito([
                ...carrito,
                "zapas niky",
              ]); /* valores previos al carrito mas lo nuevos */
              console.log(carrito);
            }}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
  

     
      <ItemlistContainer/>

      <header className="App-header">
        {<img src={logo} className="App-logo" alt="logo" />}

        <p>El mejor Shop de Padel</p>
        <a
          className="App-link"
          href="https://fabritrip89.github.io/fabricio_tripicchio_Js/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ingresar
        </a>
      </header>
      <Footer />
    </div>
  );
};

export default App;
