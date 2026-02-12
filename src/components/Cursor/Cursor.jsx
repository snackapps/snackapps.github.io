import { useCursor } from '../../hooks/useCursor';
import styles from './Cursor.module.css';

const Cursor = () => {
  const { dotRef, outlineRef, isVisible } = useCursor();

  return (
    <>
      <div 
        ref={dotRef} 
        className={styles.dot}
        style={{ opacity: isVisible ? 1 : 0 }}
      />
      <div 
        ref={outlineRef} 
        className={styles.outline}
        style={{ opacity: isVisible ? 1 : 0 }}
      />
    </>
  );
};

export default Cursor;
