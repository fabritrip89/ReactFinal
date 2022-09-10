import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
/* import Title from "./components/navbar/title"; */
import ItemlistContainer from "./components/container/itemlisContainer";
import { useState, useEffect } from "react";
import ItemDetailContainer from "./components/itemDetailContainer";


const App = ( ) => {
  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState([]);

  const buscarProductos = async () => {
    try {
      const response = await fetch(
        /* `https://api.mercadolibre.com/sites/MLA/search?q=palaspadel` */
      );
      const data = await response.json();
      setProductos(data.results);
    } catch (e) {
    //  console.log(e);
    }
  };

  useEffect(() => {
    //cuando ya se creo logiaimportante
    buscarProductos();
  }, []);
 //  console.log(productos); 
 // console.log("por renderizar");

  //se hacen validaciones

  return (
    <div className="App">
      <NavBar  carritoLenght={carrito.length} />
      {/* <Title msj="Hello" color="Green"> */}
      {productos.map((producto) => {
        if(producto.stock ===0){
          return <b>No existe</b> 
        }
        return  (


 

          //se aplica al Padre Div id [unico]
          <div key={producto.id}> 
            <h3>{producto.title}</h3>
            <img src={producto.thumbnail} alt=""/>
            <div>
              <button onClick={() => {
                  setCarrito([...carrito, producto,]); /* valores previos al carrito mas lo nuevos */
                  console.log(carrito);
                }}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        );
      })}

<ItemDetailContainer />

      <ItemlistContainer  />

      

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
