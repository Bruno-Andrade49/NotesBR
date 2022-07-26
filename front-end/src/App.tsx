import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ButtonCriacao from './components/ButtonCriacao'
import GridPagina from './components/Grid'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <NavBar/>
      <ButtonCriacao/>
      <GridPagina/>
    </>
  )
}

export default App
