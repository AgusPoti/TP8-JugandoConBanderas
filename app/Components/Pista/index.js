import styles from "./Pista.module.css";
import { useEffect, useState } from "react";
import bStyles from "../Button/Button.module.css";
import { Piazzolla } from "next/font/google";

export default function Pista({banderaElegida}) {
    const [pista, setPista] = useState([]);
    const [misPistas, setMisPistas] = useState([]);
    

    useEffect(() => {
        if(JSON.stringify(banderaElegida) != '{}'){
            let pais = banderaElegida.name;
            let firstLetter = pais[0];
            let contieneEspacio = (pais.split(' ').length > 1);
            let paisLen = pais.length;
            setMisPistas([
                {
                    title: "Cantidad de letras",
                    content: paisLen
                },
                {
                    title: "Contiene espacios?",
                    content:  (contieneEspacio) ? "Si!" : "Nao Nao!"
                },
                {
                    title: "Empieza con la letra",
                    content: firstLetter
                }
            ])
        }
    }, [banderaElegida])

    
    function darPista (){
        console.log(misPistas)
        let index = Math.floor(Math.random() * misPistas.length);
        let seEncontró = false;

        for(let i = 0; i < pista.length; i++){
            if(pista[i] = index){ seEncontró = true; }
        }

        if(!seEncontró){
            setPista(...pista, index);
            alert(`${misPistas[index].title} ${misPistas[index].content}`)
        }else{
            alert("No te quedan mas pistas.")
        }
    }
    
    return (
        <button className={bStyles.boton} style={{backgroundColor: "#0398fc"}} onClick={darPista}>Pedir Pista</button>
    );
  }
  
