import './Navbar.css';

function Navbar() {
  window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
      // document.querySelector('.Navbar').style.backgroundColor = "rgba(0, 0, 0, 0.918)"
      document.querySelector('.Navbar').classList.add('Navbar-down')
    } else {
      // document.querySelector('.Navbar').style.backgroundColor = "transparent"
      document.querySelector('.Navbar').classList.remove('Navbar-down')
    }
  })

  var open = false

  const openNav = () => {
    document.querySelector('.Navbar').classList.add('Navbar-open')
    
    if(open) {
      document.querySelector('.Navbar').classList.remove('Navbar-open')
      open = false;
    } else {
      document.querySelector('.Navbar').classList.add('Navbar-open')
      open = true;
    }
  }

  return (
    <nav className="Navbar">
        <div className="references">
            <img src="images/araquari-flag.jpg" alt="Bandeira de Araquari" className="araquari-flag" />
            <h1 className="name p-nav">Sidinei Xavier</h1>
        </div>

        <div className="menu-toggle" onClick={openNav}>
            <span className="top-line"></span>
            <span className="mid-line"></span>
            <span className="bot-line"></span>
        </div>

        <ul className="content-links">
            <li className="p-nav">Sobre</li>
            <li className="p-nav">Projetos</li>
            <li className="p-nav">Notícias</li>
            <li className="p-nav">Contatos</li>
        </ul>
    </nav>
  );
}

export default Navbar;
