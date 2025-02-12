import { NavLink } from "react-router-dom";
import styles from "../styles/NavMiddle.module.css";

export function NavMiddle() {
  return (
    <nav>
      <ul className={styles.headerNavMiddleList}>
        <li>
          <NavLink to="#">Shop </NavLink>
        </li>
        <li>
          <NavLink to="#">About </NavLink>
        </li>
        <li>
          <NavLink>Contact </NavLink>
        </li>
      </ul>
    </nav>
  );
}
