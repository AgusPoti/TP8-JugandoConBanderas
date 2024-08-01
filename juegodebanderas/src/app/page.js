"use client";

import { useEffect, useState } from "react";
import axios from 'axios';


export default function Home() {
  const [banderaElegida,  setBanderaElegida] = useState({});
  const [banderas,  setBanderas] = useState({});
  const [puntos, setPuntos] = useState();

  useEffect(() => {
    axios.get("https://countriesnow.space/api/v0.1/countries/flag/images")
      .then(response => {
        setBanderas(response.data["data"]);
      })

  }, []);
    
  return (
    <main>
      <h1>Los pokemones son {banderas.count} </h1>
    </main>
  );
}
