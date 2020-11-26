import React from 'react';
import './App.css';
import Routes from './routes';

// No REACT um componente é basicamente uma função que retorna um conteúdo em HTML.
// Nosso APP é um conjunto de componentes dentro do REACT
// REACT faz live reload, app atualiza sozinho com toda alteração nova

function App() {
  return (
      <Routes />
  );
}

export default App;
