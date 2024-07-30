import { Link, useLocation } from "react-router-dom";
function NavLinks() {
  const currentPage = useLocation.pathname;
  return (
    <ul>
      <li>
        <Link
          to="/About"
          className={currentPage === "/About" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/Portfolio"
          className={currentPage === "" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </Link>
      </li>
      <li>
        <Link
          to="/Contact"
          className={currentPage === "" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          to="/Resume"
          className={currentPage === "" ? "nav-link active" : "nav-link"}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}
export default NavLinks;
