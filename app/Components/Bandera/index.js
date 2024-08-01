import styles from "./Bandera.module.css";

export default function Bandera({url}) {
  return (
    <img className={styles.img} src={url}></img>
  );
}
