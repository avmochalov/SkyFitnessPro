import styles from "./myProgress.module.css";

function MyProgress() {
  return (
    <section className={styles.myProgress}>
      <div className={styles.myProgress__wrapper}>
        <h1 className={styles.myProgress__title}>Мой прогресс</h1>
        <div className={styles.myProgress__item}>
          <p className={styles.myProgress__question}>
            Сколько раз вы сделали наклоны вперед?
          </p>
          <input
            type="text"
            className={styles.myProgress__answer}
            placeholder="Введите значение"
          />
        </div>
        <div className={styles.myProgress__item}>
          <p className={styles.myProgress__question}>
            Сколько раз вы сделали наклоны назад?
          </p>
          <input
            type="number"
            className={styles.myProgress__answer}
            placeholder="Введите значение"
          />
        </div>
        <div className={styles.myProgress__item}>
          <p className={styles.myProgress__question}>
            Сколько раз вы сделали поднятие ног, согнутых в коленях?
          </p>
          <input
            type="number"
            className={styles.myProgress__answer}
            placeholder="Введите значение"
          />
        </div>
        <button type="button" className={styles.myProgress__submit}>
          Отправить
        </button>
      </div>
    </section>
  );
}
export default MyProgress;