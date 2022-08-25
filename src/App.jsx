import logo from "./logo.svg"; 
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Title from './components/navbar/title';
import ItemlistContainer from './components/container/itemlisContainer'


const App =() => {
  return (
    <div className="App">
       <NavBar>
       <Title msj="Hello" color="Green">
        <div></div>
        </Title>

        </NavBar>
        <ItemlistContainer black="blue" msj="Bienvenido a PadelRock" ></ItemlistContainer> 

        
      
      <header className="App-header">
       
        { <img src={logo} className="App-logo" alt="logo" /> }
        
  
        
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
      <Footer/>

    </div>
  );
}

export default App;
