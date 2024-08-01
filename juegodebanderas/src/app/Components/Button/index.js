import styles from "./Button.module.css";

export default function Button({ sendText }) { 
  return (
    <button className={styles.boton}>
      {sendText}
    </button>
  );
};
