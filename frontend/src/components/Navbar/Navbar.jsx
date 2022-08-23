import './Navbar.css';

function Navbar() {
  window.addEventListener('scroll', () => {
    if(window.scrollY > 30) {
      document.querySelector('.Navbar').classList.add('Navbar-down')
    } else {
      document.querySelector('.Navbar').classList.remove('Navbar-down')
    }
  })

  var open = false

  const openNav = () => {
    if(open) {
      document.querySelector('.Navbar').classList.remove('Navbar-open')
      document.querySelector('body').style.overflow = 'auto'
      open = false;
    } else {
      document.querySelector('body').style.overflow = 'hidden'
      document.querySelector('.Navbar').classList.add('Navbar-open')
      open = true;
    }
  }

  function goToSection(section) {
    if(section == 'About') {
      console.log('About')
    } else if(section == 'Project') {
      console.log('Project')
    } else if (section == 'News') {
      console.log('News')
    } else {
      console.log('Contact')
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
            <li className="p-nav" onClick={goToSection('About')}>Sobre</li>
            <li className="p-nav" onClick={goToSection('Projects')}>Projetos</li>
            <li className="p-nav" onClick={goToSection('News')}>Notícias</li>
            <li className="p-nav" onClick={goToSection('Contact')}>Contatos</li>
        </ul>
    </nav>
  );
}

export default Navbar;
