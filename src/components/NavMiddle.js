import { NavLink, Link } from "react-router-dom";
import styles from "../styles/NavMiddle.module.css";

export function NavMiddle() {
  return (
    <nav>
      <ul className={styles.headerNavMiddleList}>
        <li>
          <Link to="#" className={styles.navMiddleLink}>
            Shop
          </Link>
        </li>
        <li>
          <Link to="#" className={styles.navMiddleLink}>
            About
          </Link>
        </li>
        <li>
          <NavLink to="/contact" className={styles.navMiddleLink}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
