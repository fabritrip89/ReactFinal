import logo from "./logo.svg"; 
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import bolsocatriamarillo from './images/bolsocatriamarillo.jpg'; 

const App =() => {
  return (
    <div className="App">
       <NavBar/>
      <header className="App-header">
       
        { <img src={logo} className="App-logo" alt="logo" /> }
        
       {  <img src={bolsocatriamarillo} className="App-logo" alt="logopagina" /> }
        
        <p>Bienvenido a Padel Rock</p>
        <a
          className="App-link"
          href="https://fabritrip89.github.io/fabricio_tripicchio_Js/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visitanos
        </a>

      </header>
      <Footer/>

    </div>
  );
}

export default App;
