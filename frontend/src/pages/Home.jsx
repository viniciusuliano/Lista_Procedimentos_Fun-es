import './Home.css';
import ProjectCard from '../components/ProjectCard/ProjectCard'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="Home">
      <div className="banner">
        <img src="images/banner-2.jpg" alt="Perfil Sidinei" />
        
        <div className="apresentation">
          <h1>Olá sou Sidinei Xavier</h1>
          <p>Trabalhando para um futuro melhor</p>
        </div>
      </div>

      <div className="about">
        <div className="texts-about">
          <h1 className="title-about">Where does it come from?</h1>

          <p className="text-about">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin 
          literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked 
          up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, 
          discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) 
          by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem 
          Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
        </div>

        <div className="image-about">
          <img src="images/text-history-logo.jpg" alt="Perfil sidinei" className="perfil-image-about"/>
        </div>
      </div>

      <div className="projects-section">
        <h1 className="projects-section-title">Projetos Aprovados</h1>

        <div className="projects">

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
