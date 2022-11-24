import React from 'react';
import './App.css';
import { Home } from './components/home/Home' // import para Home
import { ExercicioLista } from './components/exercicio/ExercicioLista' // import para lista
import { ExercicioCadastro } from './components/exercicio/ExercicioCadastro' // import para Home

import { Link, Route, Routes } from 'react-router-dom'; // import para index das Route e Routes

function App() {
  return (
    <>
    <h1> Bem vindo !!</h1>

    <ul>
      <li> <Link to={'/'}>Home</Link></li>
      <li> <Link to={'/exercicio'}>Exercicio</Link></li>
    </ul>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercicio" element={< ExercicioLista />} />
        <Route path="/exercicio/cadastro" element={< ExercicioCadastro />} />
        <Route path="/exercicio/cadastro/:id" element={< ExercicioCadastro />} />
        <Route path="/exercicio/:id" element={< ExercicioCadastro />} />
    </Routes>

    </>
  );
}

export default App; // forma de exportar as funçoes ex: App
