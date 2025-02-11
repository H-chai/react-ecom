import { Link } from "react-router-dom";
import { Nav } from "./Nav";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export function Header() {
  return (
    <header>
      <button>
        <MenuOutlinedIcon></MenuOutlinedIcon>
      </button>
      <Link to="/"></Link>
      <Nav />
    </header>
  );
}
