import "../styles/Search.css"
import React from 'react'

export const Search = () => {
  return (
    <>
      <label for="barra-busqueda">Buscar</label>
      <input type="search" name="buscar" id="barra-busqueda" />
      <button>🔍︎</button>
    </>
  )
}
