"use client";

import { useEffect, useState } from "react";
import axios from 'axios';
import Input from "./../Components/Input";
import Bandera from "./../Components/Bandera";
import styles from './juego.module.css';
import bStyles from './../Components/Button/Button.module.css';
import MyTimer from "../Components/Timer";

export default function Home() {
  const [banderaElegida,  setBanderaElegida] = useState({});
  const [banderas,  setBanderas] = useState([]);
  const [puntos, setPuntos] = useState();
  const [update, setUpdate] = useState(false);
  const [rta, setRta] = useState("");

  const [timer, setTimer] = useState(new Date(Date.now() + 15 * 1000));
  const [updateTimer, setUpdateTimer] = useState(false);

  useEffect(() => {
    if(banderaElegida !== undefined){
      if(rta.toLowerCase().split(" ").join("") == String(banderaElegida.name).toLowerCase().split(" ").join("")){
        setPuntos(puntos + 10);
      }else{
        setPuntos((puntos - 1 >= 0) ? puntos - 1 : 0);
      }
    }
    var keys = Object.keys(banderas);
    setBanderaElegida(banderas[keys[ keys.length * Math.random() << 0]]);
  }, [update]);

  useEffect(() => {
    axios.get("https://countriesnow.space/api/v0.1/countries/flag/images")
      .then(
        response => {
          setBanderas(response.data["data"]);
          })
    setUpdate(true);
  }, []);

  useEffect(() => {
    console.log("updateado")
    console.log(timer)
    setTimer(new Date(Date.now() + 15 * 1000));
    console.log(timer)

  }, [updateTimer])
  console.log((banderaElegida!== undefined) ? banderaElegida.name : "no hay nada");
  
  return (
    <main className={styles.main}>
      <h1>FLAGPARDY</h1>
      <Bandera url={(banderaElegida !== undefined) ? banderaElegida.flag : ""}/>
      <Input iPlaceholder={"¿A qué país pertenece la bandera?"} sendText={"Enviar"} update={update} setUpdate={setUpdate} setRta={setRta}/>
      <MyTimer expiryTimestamp={timer} updater={setUpdateTimer} update={updateTimer}></MyTimer>
      <h5>Puntos: {puntos}</h5>
    </main>
  );
}


