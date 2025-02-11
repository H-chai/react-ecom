import { NavLink } from "react-router-dom";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink>
            <PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon>
          </NavLink>
        </li>
        <li>
          <NavLink>
            <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
          </NavLink>
        </li>
        <li>
          <NavLink>
            <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
