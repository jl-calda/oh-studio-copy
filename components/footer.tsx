import styles from "./footer.module.scss";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <Logo />
        <span>&copy; Oli Harris 2023</span>
      </div>
      <ul>
        <li>
          <a href="">Twiiter</a>
        </li>
        <li>
          <a href="">LinkedIn</a>
        </li>
        <li>
          <a href="">Mail</a>
        </li>
      </ul>
    </footer>
  );
};
