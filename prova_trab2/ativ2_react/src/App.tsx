import React from 'react';
import './App.css';
import { Home } from './components/home/Home' // import para Home
import { ExercicioLista } from './components/exercicio/ExercicioLista' // import para lista
import { ExercicioCadastro } from './components/exercicio/ExercicioCadastro' // import para Home

import { Link, Route, Routes } from 'react-router-dom'; // import para index das Route e Routes

function App() {
  return (
    <>
    <div className='container-page'>
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
    <h1 className='h1_title'>TraceFit</h1>

    <div className="collapse navbar-collapse" id="navbarNav">

    <ul className="navbar-nav">
      <li className="nav-item"> <a className="nav-link active"> <Link to={'/'} className='link'>Home</Link> </a></li>
      <li className="nav-item"> <a className="nav-link active"> <Link to={'/exercicio'} className='link'>Exercicio</Link> </a></li>
    </ul>
    </div>
    </div> </nav>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercicio" element={< ExercicioLista />} />
        <Route path="/exercicio/cadastro" element={< ExercicioCadastro />} />
        <Route path="/exercicio/cadastro/:id" element={< ExercicioCadastro />} />
        <Route path="/exercicio/:id" element={< ExercicioCadastro />} />
    </Routes>
   
    
    </div>
    </>
    
  );
}

export default App; // forma de exportar as funçoes ex: App
