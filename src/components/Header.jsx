import '../scss/modules/Header.scss';
import NavLinks from "./Navigation";

function Header() {
  return (
    <header>
      <div className="container">
        <p className="logo">falfada</p>
        <nav className="nav">
          <NavLinks />
        </nav>
      </div>
    </header>
    
  );
}

export default Header;