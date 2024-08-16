import styles from "./Button.module.css";

export default function Button({ sendText, bgColor, setClicked }) { 
  const update = () => {
    setClicked(Math.random());
  }
  return (
    <button className={styles.boton} style={{backgroundColor: bgColor}} onSubmit={update}>
      {sendText}
    </button>
  );
};
