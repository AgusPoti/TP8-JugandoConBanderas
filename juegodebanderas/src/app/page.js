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
  const [puntos, setPuntos] = useState();
  const [update, setUpdate] = useState(false);

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


  return (
    <main className={styles.main}>
      <h1>FLAGPARDY</h1>
      <Bandera url={(banderaElegida !== undefined) ? banderaElegida.flag : ""}/>
      <Input iPlaceholder={"¿A qué país pertenece la bandera?"}/>
      <button className={bStyles.boton} onClick={()=> setUpdate(true)}>Enviar</button>
    </main>
  );
}
