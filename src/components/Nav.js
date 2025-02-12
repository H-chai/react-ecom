import { NavLink } from "react-router-dom";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import styles from "../styles/Nav.module.css";

export function Nav() {
  return (
    <nav>
      <ul className={styles.headerNavList}>
        <li className={styles.navListItem}>
          <NavLink className={styles.navListItem}>
            <PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon>
          </NavLink>
        </li>
        <li className={styles.navListItem}>
          <NavLink className={styles.navListItem}>
            <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
          </NavLink>
        </li>
        <li className={styles.navListItem}>
          <NavLink className={styles.navListItem}>
            <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
          </NavLink>
        </li>
        <li>
          <button className={styles.navButton}>
            <MenuOutlinedIcon></MenuOutlinedIcon>
          </button>
        </li>
      </ul>
    </nav>
  );
}
