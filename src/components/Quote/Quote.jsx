import styles from './Quote.module.css';

const Quote = () => {
  return (
    <>
      <div className={styles.divider} />
      <div className={styles.quote}>
        "Simplicity is the ultimate sophistication."
      </div>
    </>
  );
};

export default Quote;
