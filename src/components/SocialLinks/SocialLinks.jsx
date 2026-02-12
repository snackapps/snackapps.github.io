import { TELEGRAM_ICON, DISCORD_ICON, GITHUB_ICON } from '../../utils/icons';
import styles from './SocialLinks.module.css';

const links = [
  {
    href: 'https://t.me/xorencryption',
    icon: TELEGRAM_ICON,
    label: 'Telegram'
  },
  {
    href: 'https://discord.com/users/snackware',
    icon: DISCORD_ICON,
    label: 'Discord'
  },
  {
    href: 'https://github.com/snackapps',
    icon: GITHUB_ICON,
    label: 'GitHub'
  }
];

const SocialLinks = () => {
  return (
    <div className={styles.links}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
            <path d={link.icon} />
          </svg>
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
