import logo from './logo.svg';
import './App.css';
import { ModalTemplate } from './components/modalTemplate';

import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function App() {

  const [livro, setLivro] = useState({nome: 'O mundo de Sofia', autor: 'Jostein Gaarder'})
  return (
    <div className="App">
      <ModalTemplate data ={livro} />

    </div>
  );
}

export default App;
