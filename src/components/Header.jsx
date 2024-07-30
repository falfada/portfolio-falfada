import '../scss/modules/Header.scss';
import NavLinks from "./Navigation";

function Header() {
  return (
    <header>
      <div className="container">
        <h1 className="logo">falfada</h1>
        <nav className="nav">
          <NavLinks />
        </nav>
      </div>
    </header>
    
  );
}

export default Header;