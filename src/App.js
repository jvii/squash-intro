import './App.css';
import Form from './Form';

function App() {
  return (
    <div className="App">
      <img src={require('./naassquash.png')} alt='NääsSquash logo' className='logo'/>
      <h1>Squash-Intro</h1>
      <p>
        Nääs-Squash järjestää lajista kiinnostuneille Squash-Intro -tapahtumia Tampereen
        Tenniskeskuksella.
      </p>
      <ul>
        <li>&#x2705; Opastusta lajin pariin vasta-alkajille</li>
        <li>&#x1F4A1; Tekniikkaa ja taktiikkaa kokeneemmillekin pelureille</li>
        <li>&#x1F64C; Uusia pelikavereita</li>
      </ul>
      <p>
        Jätä sähköpostiosoitteesi alla olevaan kenttään ja ilmoitamme sinulle, kun seuraava
        tapahtuma järjestetään.
      </p>
      <Form />
    </div>
  );
}

export default App;
