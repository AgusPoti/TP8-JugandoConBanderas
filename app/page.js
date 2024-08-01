"use client";

import { useEffect, useState } from "react";
import axios from 'axios';
import Input from "./Components/Input";
import Bandera from "./Components/Bandera";
import Button from "./Components/Button";
import styles from './page.module.css';
import bStyles from './Components/Button/Button.module.css';

export default function Home() {
  const [banderaElegida,  setBanderaElegida] = useState({});
  const [banderas,  setBanderas] = useState([]);
  const [puntos, setPuntos] = useState(0);
  const [update, setUpdate] = useState(false);
  const [respuestaUsuario, setRespuestaUsuario] = useState('');


  useEffect(() => {
    var keys = Object.keys(banderas);
    setBanderaElegida(banderas[keys[ keys.length * Math.random() << 0]]);
    //setBanderas(Object.filter(p => {banderas, p => p.name !== banderaElegida.name;}));
    setUpdate(false);
  }, [update]);

  useEffect(() => {
    axios.get("https://countriesnow.space/api/v0.1/countries/flag/images")
      .then(
        response => {
          setBanderas(response.data["data"]);
          })
    setUpdate(true);
  }, []);

  
  const cargarMas = (banderasData) => {
    const keys = Object.keys(banderasData);
    if (keys.length > 0) {
      setBanderaElegida(banderasData[keys[Math.floor(Math.random() * keys.length)]]);
    }
  }


  console.log(banderaElegida);

  const verificarRta = () => {
    if (respuestaUsuario.trim().toLowerCase() == banderaElegida.name?.trim().toLowerCase()) {
      setPuntos(prevPuntos => prevPuntos + 10);
    } else {
      setPuntos(prevPuntos => prevPuntos - 1);
    }
    setRespuestaUsuario('');
    cargarMas(banderas); 
  }

  return (
    <main className={styles.main}>
      <h1>FLAGPARDY</h1>
      <Bandera url={(banderaElegida !== undefined) ? banderaElegida.flag : ""}/>
      <Input value={respuestaUsuario} onChange={(e) => setRespuestaUsuario(e.target.value)} placeholder="Escribe el nombre del país"/>
      <button className={bStyles.boton} onClick={cargarMas}>Enviar</button>
      <button className={bStyles.boton} onClick={verificarRta}>Verificar respuesta</button>
      <h5>puntos: {puntos} </h5>
    </main>
  );
}


