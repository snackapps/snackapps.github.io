import { useCardSpotlight } from '../../hooks/useCardSpotlight';
import Avatar from '../Avatar/Avatar';
import SocialLinks from '../SocialLinks/SocialLinks';
import Quote from '../Quote/Quote';
import styles from './Card.module.css';

const Card = () => {
  const cardRef = useCardSpotlight();

  return (
    <div className={styles.container}>
      <div ref={cardRef} className={styles.card}>
        <Avatar />
        <h1 className={styles.name}>snackware</h1>
        <p className={styles.bio}>no name skid & vibecoder</p>
        <SocialLinks />
        <Quote />
      </div>
    </div>
  );
};

export default Card;
