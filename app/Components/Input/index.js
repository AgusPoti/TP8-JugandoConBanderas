import styles from "./Input.module.css";

export default function Input({iPlaceholder, sendText, update, setUpdate, setRta}) {
    const submit = (e) => {
      setRta(e.target.previousElementSibling.value);
      setUpdate((update === false) ? true : false);
    }
    return (
      <div className={styles.container}>
        <input className={styles.input} type="text" placeholder={iPlaceholder} name="inp"></input>
        <button className={styles.boton} onClick={submit}>
        {sendText}
      </button>
    </div>
    );
  }
  
