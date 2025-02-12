import { Link } from "react-router-dom";
import styles from "../styles/Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footerPadding}>
      <nav>
        <ul className={styles.footerList}>
          <li>
            <Link to="#" className={styles.footerLink}>
              Terms of Use
            </Link>
          </li>
          <li>
            <Link to="#" className={styles.footerLink}>
              Privacy Policy
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
