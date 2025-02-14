import { NavLink } from "react-router-dom";
import styles from "../styles/NavMiddle.module.css";

export function NavMiddle() {
  return (
    <nav>
      <ul className={styles.headerNavMiddleList}>
        <li>
          <NavLink to="#" className={styles.navMiddleLink}>
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className={styles.navMiddleLink}>
            About{" "}
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.navMiddleLink}>Contact </NavLink>
        </li>
      </ul>
    </nav>
  );
}
