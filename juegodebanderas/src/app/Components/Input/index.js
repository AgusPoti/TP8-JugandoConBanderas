import styles from "./input.module.css";

export default function Input({iPlaceholder}) {
    return (
        <div className={styles.container}>
          <input className={styles.input} type="text" placeholder={iPlaceholder}></input>
      </div>
    );
  }
  
