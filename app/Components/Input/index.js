import styles from "./Input.module.css";
import { useEffect, useState } from "react";

export default function Input({iPlaceholder, sendText, update, setUpdate, banderaElegida, setPuntos, puntos}) {
    const [rta, setRta] = useState("");

    const submit = () => {
      if(banderaElegida !== undefined){
        if(rta.toLowerCase().split(" ").join("") == String(banderaElegida.name).toLowerCase().split(" ").join("")){
          setPuntos(puntos + 10);
        }else{
          setPuntos((puntos - 1 >= 0) ? puntos - 1 : 0);
        }
        setUpdate(update + 1);
      }
    }

    return (
      <div className={styles.container}>
        <input className={styles.input} type="text" autoComplete="off" placeholder={iPlaceholder} 
          onChange={e => { setRta(e.currentTarget.value); }}></input>
        <button className={styles.boton} onClick={submit}>{sendText}</button>
    </div>
    );
  }
  
