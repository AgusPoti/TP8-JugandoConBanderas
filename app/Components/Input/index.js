import styles from "./Input.module.css";

export default function Input({iPlaceholder}) {
    return (
      <input className={styles.input} type="text" placeholder={iPlaceholder}></input>
    );
  }
  
