import styles from "./hero-text.module.scss";

export const HeroText = () => {
  return (
    <div className={styles.hero}>
      <span>A brand and product designer working with clients globally</span>
      <ul>
        <li>Expertise</li>
        <li className={styles.pill}>Branding</li>
        <li className={styles.pill}>Product</li>
        <li className={styles.pill}>Design System</li>
      </ul>
    </div>
  );
};
