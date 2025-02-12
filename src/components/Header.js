import { Link } from "react-router-dom";
import { Nav } from "./Nav";
import styles from "../styles/Header.module.css";
import Logo from "../logo.svg";

export function Header() {
  return (
    <header className={styles.headerElements}>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <Nav />
    </header>
  );
}
