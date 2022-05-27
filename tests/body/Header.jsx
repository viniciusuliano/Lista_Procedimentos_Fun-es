import './Header.css';



function Header() {
  var open = false

  const test = () => {
    document.querySelector('.Header').classList.add('Header-open')
    
    if(open) {
      document.querySelector('.Header').classList.remove('Header-open')
      open = false;
    } else {
      document.querySelector('.Header').classList.add('Header-open')
      open = true;
    }
  }

  return (
    <div className="Header">
        <div className="reference">
            <img src="images/bandeira-araquari.jpg" alt="Bandeira de Araquari" className="arquari-flag"/>
            <h1 className="name">Sidinei Xavier</h1>
        </div>

      {/* Nav small screen */}
      <nav className="nav-small-screen">
        <div className="menu-toggle" onClick={test}>
            <span className="top-line"></span>
            <span className="mid-line"></span>
            <span className="bot-line"></span>
        </div>

        <ul className="links">
          <li><a href="">Sobre</a></li>
          <li><a href="">Projetos</a></li>
          <li><a href="">Notícias</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
