import { NavLink, Link } from "react-router-dom";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import commonStyles from "../styles/common.module.css";
import styles from "../styles/NavLeft.module.css";

export function NavLeft() {
  return (
    <nav>
      <ul className={styles.headerNavLeftList}>
        <li className={styles.navListItem}>
          <Link to="#" className={styles.navListItem}>
            <PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon>
          </Link>
        </li>
        <li className={styles.navListItem}>
          <Link to="#" className={styles.navListItem}>
            <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
          </Link>
        </li>
        <li className={styles.navListItem}>
          <NavLink className={styles.navListItem}>
            <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
          </NavLink>
        </li>
        <li className={styles.hamburgerIcon}>
          <button className={commonStyles.button}>
            <MenuOutlinedIcon></MenuOutlinedIcon>
          </button>
        </li>
      </ul>
    </nav>
  );
}
