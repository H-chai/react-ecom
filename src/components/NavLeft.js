import { NavLink, Link } from "react-router-dom";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import commonStyles from "../styles/common.module.css";
import styles from "../styles/NavLeft.module.css";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import menuStyles from "../styles/hamburgerMenu.module.css";
import { useCartStore } from "../store/cartStore";

export function NavLeft() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleHamburgerMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  const { cart } = useCartStore();
  const totalItem = cart.reduce((total, item) => total + item.quantity, 0);

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
          <NavLink to="/cart" className={styles.navListItem}>
            <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
            {totalItem > 0 ? (
              <p className={styles.itemNumber}>{totalItem}</p>
            ) : (
              ""
            )}
          </NavLink>
        </li>
        <li className={styles.hamburgerIcon}>
          {isMenuOpen ? (
            <button
              className={commonStyles.button}
              onClick={toggleHamburgerMenu}
            >
              <CloseIcon className={menuStyles.closeIcon}></CloseIcon>
            </button>
          ) : (
            <button
              className={commonStyles.button}
              onClick={toggleHamburgerMenu}
            >
              <MenuOutlinedIcon></MenuOutlinedIcon>
            </button>
          )}
          <nav
            className={`${menuStyles.hamburgerMenu} ${
              isMenuOpen ? menuStyles.open : ""
            }`}
          >
            <ul className={menuStyles.hamburgerMenuList}>
              <li className={menuStyles.hamburgerMenuListItem}>
                <Link
                  to="/"
                  onClick={toggleHamburgerMenu}
                  className={menuStyles.hamburgerMenuLink}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link to="#" className={menuStyles.hamburgerMenuLink}>
                  About
                </Link>
              </li>
              <li>
                <NavLink to="/contact" className={menuStyles.hamburgerMenuLink}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </li>
      </ul>
    </nav>
  );
}
