"use client";

import { useEffect, useState } from "react";
import axios from 'axios';
import Input from "./../Components/Input";
import Bandera from "./../Components/Bandera";
import styles from './juego.module.css';
import Button from "../Components/Button";
import Pista from "../Components/Pista";

export default function Home() {
  const [banderaElegida, setBanderaElegida] = useState({});
  const [banderas,  setBanderas] = useState([]);
  const [puntos, setPuntos] = useState(0);
  const [update, setUpdate] = useState(0);

  const updateFlag = () => {
    setBanderaElegida(banderas[(Math.floor(Math.random() * banderas.length))]);
  }

  useEffect(() => {
    axios.get("https://countriesnow.space/api/v0.1/countries/flag/images")
      .then(
        response => {
          setBanderas(response.data["data"]);
          setBanderaElegida(response.data["data"][(Math.floor(Math.random() * response.data["data"].length))]);
        })
  }, []);

  useEffect(() => {
    if(update != 0 && banderaElegida != undefined){
      updateFlag();
    }
  }, [update])

  console.log(banderaElegida)
  
  return (
    <main className={styles.main}>
      <div className={styles.titleContainer}>
        <Pista banderaElegida={banderaElegida}/>
        <h1>FLAGPARDY</h1>
        <Button sendText={"Guardar Puntuación"} bgColor={'#ff731c'}/>
      </div>
      <Bandera url={(banderaElegida !== undefined) ? banderaElegida.flag : "https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-11-849_512.gif"}/>
      <Input iPlaceholder={"¿A qué país pertenece la bandera?"} 
              sendText={"Enviar"} 
              banderaElegida={banderaElegida} 
              setPuntos={setPuntos} 
              update={update} 
              setUpdate={setUpdate}
              puntos={puntos}/>
      <h5 className={styles.puntos}> Puntos: {puntos}</h5>
    </main>
  );
}


