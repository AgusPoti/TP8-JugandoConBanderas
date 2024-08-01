"use client";

import { useEffect, useState } from "react";
import axios from 'axios';
import Input from "./Components/Input";
import Bandera from "./Components/Bandera";
import Button from "./Components/Button";

export default function Home() {
  const [banderaElegida, setBanderaElegida] = useState({});
  const [banderas, setBanderas] = useState({});
  const [puntos, setPuntos] = useState();


  useEffect(() => {
    axios.get("https://countriesnow.space/api/v0.1/countries/flag/images")
      .then(response => {
        setBanderas(response.data["data"]);
      });
  }, []);

  return (
    <main>
      <h1>El juego de las banderas!</h1>
      <Input iType="text" iPlaceholder="Ingrese la bandera" />
      <Boton sendText="Finalizar" onClick={handleOpenAlert} />

    </main>
  );
}
