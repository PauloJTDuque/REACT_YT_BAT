import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {

  const nome = 'Terra Duque'

  return (
    <div className="App">

      <SayMyName nome="Paulo Duque" />
      <SayMyName nome={nome} />
      <Pessoa
        nome='Rodrigo'
        idade="28"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />

    </div>
  );
}

export default App;
