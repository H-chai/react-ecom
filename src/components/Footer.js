import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <Link to="#">Terms of Use</Link>
          </li>
          <li>
            <Link to="#">Privacy Policy</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
