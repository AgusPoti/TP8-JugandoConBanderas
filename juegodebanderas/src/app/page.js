"use client";

import { useEffect, useState } from "react";
import axios from 'axios';

export default function Home() {
  const [banderaElegida,  setBanderaElegida] = useState({});
  const [banderas,  setBanderas] = useState([]);
  const [puntos, setPuntos] = useState();

  useEffect(() => {
    axios.get("https://countriesnow.space/api/v0.1/countries/flag/images")
      .then(
        response => {
          setBanderas(response.data["data"]);
          })
  }, []);

  const cargarMas = () => {
    var keys = Object.keys(banderas);
    return setBanderaElegida(banderas[keys[ keys.length * Math.random() << 0]]);
  }

  useEffect(() => {
    cargarMas()
    //setBanderas(Object.filter(p => {banderas, p => p.name !== banderaElegida.name;}));
  }, [cargarMas]);



  return (
    <main>
      <h1>Flagpardy</h1>
      <ul>
        <img src={(banderaElegida !== undefined) ? banderaElegida.flag : ""}></img>
      </ul>
      <button onClick={cargarMas}>Cargar más</button>
    </main>
  );
}
