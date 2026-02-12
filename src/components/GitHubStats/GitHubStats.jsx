import { useEffect, useState } from 'react';
import styles from './GitHubStats.module.css';

const GitHubStats = ({ username = 'snackapps' }) => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) throw new Error('Failed to fetch user data');
        const userData = await userResponse.json();
        setUserData(userData);

        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        if (!reposResponse.ok) throw new Error('Failed to fetch repos');
        const reposData = await reposResponse.json();
        setRepos(reposData);

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  if (loading) return <div className={styles.loading}>Loading GitHub stats...</div>;
  if (error) return null;
  if (!userData) return null;

  return (
    <div className={styles.container}>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statNumber}>{userData.public_repos}</span>
          <span className={styles.statLabel}>Repos</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.stat}>
          <span className={styles.statNumber}>{userData.followers}</span>
          <span className={styles.statLabel}>Followers</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.stat}>
          <span className={styles.statNumber}>{userData.following}</span>
          <span className={styles.statLabel}>Following</span>
        </div>
      </div>

      <div className={styles.repos}>
        <h3 className={styles.reposTitle}>Recent Repositories</h3>
        <div className={styles.repoList}>
          {repos.map((repo) => (
            <a 
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.repo}
            >
              <div className={styles.repoName}>{repo.name}</div>
              <div className={styles.repoMeta}>
                <span className={styles.repoLang}>{repo.language || 'N/A'}</span>
                <span className={styles.repoStars}>★ {repo.stargazers_count}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className={styles.contribution}>
        <img 
          src={`https://ghchart.rshah.org/${username}`}
          alt="GitHub Contributions"
          className={styles.contributionGraph}
        />
      </div>
    </div>
  );
};

export default GitHubStats;
