import { Link } from "react-router-dom";
import { NavLeft } from "./NavLeft";
import { NavMiddle } from "./NavMiddle";
import styles from "../styles/Header.module.css";
import Logo from "../logo.svg";

export function Header() {
  return (
    <header className={styles.headerElements}>
      <Link to="/">
        <img src={Logo} alt="Logo" className={styles.logo} />
      </Link>
      <NavMiddle />
      <NavLeft />
    </header>
  );
}
