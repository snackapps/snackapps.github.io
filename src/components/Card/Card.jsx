import { useCardSpotlight } from '../../hooks/useCardSpotlight';
import SocialLinks from '../SocialLinks/SocialLinks';
import styles from './Card.module.css';

const Card = () => {
  const cardRef = useCardSpotlight();

  return (
    <div className={styles.container}>
      <div ref={cardRef} className={styles.card}>
        <div className={styles.banner}>
          <img 
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2F6Z284Y3J5ZmpxN2I3N3phZ2Jpc3loMWZnZHV5bWl4NGFiZzMycyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RyrAgBKLtNdGU/giphy.gif" 
            alt="Discord Banner"
            className={styles.bannerImage}
          />
        </div>
        <h1 className={styles.name}>snackware</h1>
        <p className={styles.bio}>no name skid & vibecoder</p>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Card;
