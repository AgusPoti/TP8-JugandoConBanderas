"use client";

import { useEffect, useState } from "react";
import axios from 'axios';
import Input from "./Components/Input";
import Bandera from "./Components/Bandera";
import Button from "./Components/Button";

export default function Home() {
<<<<<<< HEAD
  const [banderaElegida, setBanderaElegida] = useState({});
  const [banderas, setBanderas] = useState({});
  const [puntos, setPuntos] = useState(0);

=======
  const [banderaElegida,  setBanderaElegida] = useState({});
  const [banderas,  setBanderas] = useState([]);
  const [puntos, setPuntos] = useState();
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    var keys = Object.keys(banderas);
    setBanderaElegida(banderas[keys[ keys.length * Math.random() << 0]]);
    //setBanderas(Object.filter(p => {banderas, p => p.name !== banderaElegida.name;}));
    setUpdate(false);
  }, [update]);
>>>>>>> b12f988e4663c59bd6570b9cae6a59de34b0401c

  useEffect(() => {
    axios.get("https://countriesnow.space/api/v0.1/countries/flag/images")
      .then(
        response => {
          setBanderas(response.data["data"]);
          })
    setUpdate(true);
  }, []);

<<<<<<< HEAD
  const cargarMas = () => {
    var keys = Object.keys(banderas);
    return setBanderaElegida(banderas[keys[ keys.length * Math.random() << 0]]);
  }

  useEffect(() => {
    cargarMas()
    //setBanderas(Object.filter(p => {banderas, p => p.name !== banderaElegida.name;}));
  }, []);
=======
>>>>>>> b12f988e4663c59bd6570b9cae6a59de34b0401c

  const VerificarRta = () =>{
    if (respuestaUsuario == banderaElegida.name) {
      setPuntos(puntos + 10);
    }else{
      setPuntos(puntos - 1);
    }
    cargarMas()
  }

  return (
    <main>
      <h1>Flagpardy</h1>
      <ul>
        <img src={(banderaElegida !== undefined) ? banderaElegida.flag : ""}></img>
      </ul>
      <button onClick={()=> setUpdate(true)}>Cargar más</button>
    </main>
  );
}
