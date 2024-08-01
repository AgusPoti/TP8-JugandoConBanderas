"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [pokemones,  setPokemones] = useState({});
  const [listado,  setListado] = useState([]);

  useEffect(() => {
    axios.get("https://countriesnow.space/api/v0.1/countries/flag/images")
      .then(response => {
        setPokemones(response.data);
        setListado(l => response.data.results);
      })


    console.log("hola");
  }, []);

  const cargarMas = () => {
    axios.get(pokemones.next)
      .then(response => {
        setPokemones(response.data);
        setListado(l => [...l, ...response.data.results]);
      })
  }
    
  return (
    <main>
      <h1>Los pokemones son {pokemones.count} </h1>
      <ul>
        { listado.map(pokemon => <li>{pokemon.name}</li>) }
      </ul>
      <button onClick={cargarMas}>Cargar más</button>
    </main>
  );
}
