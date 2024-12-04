import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [userEffectCounter, setUseEffctCounter] = useState(0)


  const [logado, setLogado] = useState(false);

  useEffect(() => {
    console.log("useeffect chamado");
    setUseEffctCounter(userEffectCounter + 1);
  }, [logado])

  const logar = () => {
    setLogado(true);
  };

  const deslogar = () => {
    setLogado(false);
  };

  return (
    <div className="App">
      <h1>use effect foi chamado {userEffectCounter} vezes</h1>
      {logado ? <p> logado </p> : <p>deslogado</p>}
      <button onClick={logar}>logar</button>
      <button onClick={deslogar}>deslogar</button>
    </div>
  );
}

export default App;
