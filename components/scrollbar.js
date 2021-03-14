import styles from "../styles/Scrollbar.module.css";
import ScrollContainer from 'react-indiana-drag-scroll'

export default function Scrollbar() {
  return (
    <div className={styles.container}>
      <div className={styles.scroll}>
      <h3 className={styles.scrollbarTitle}>
        Especialista en el tratamiento de:
      </h3>
      <ScrollContainer className={styles.scrollbar}>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}>etc.</div>
      </ScrollContainer>
    </div>
    </div>
    
  );
}
