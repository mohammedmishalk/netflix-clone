// import logo from './logo.svg';
import './App.css';
import requests from './requests';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
    
     <Row  title="NETFLIX ORIGINALS" isLargeRow fetchUrl={requests.fetchNetflixOrginals}/>
     <Row title="Comedy Movie" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Documentari" fetchUrl={requests.fetchDocumentaries}/>
     <Row title="Horror Movie" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
    </div>
  );
}

export default App;
