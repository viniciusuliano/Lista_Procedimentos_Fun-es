import './Home.css';
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import News from '../components/News/News';
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
          <h1 className="title-about">Quem é Sidinei Xavier?</h1>

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

        <div className="align-projects">
          <div className="projects">
            <ProjectCard title="Feirão do Emprego" summary="Feirão feito em conjunto a diversas empresas para oferecer empregos. Foi realizado dia 30/05/2022"/>
            <ProjectCard title="Feirão do Emprego" summary="Feirão feito em conjunto a diversas empresas para oferecer empregos. Foi realizado dia 30/05/2022"/>
            <ProjectCard title="Feirão do Emprego" summary="Feirão feito em conjunto a diversas empresas para oferecer empregos. Foi realizado dia 30/05/2022"/>
            <ProjectCard title="Feirão do Emprego" summary="Feirão feito em conjunto a diversas empresas para oferecer empregos. Foi realizado dia 30/05/2022"/>
          
            <ProjectCard title="Feirão do Emprego" summary="Feirão feito em conjunto a diversas empresas para oferecer empregos. Foi realizado dia 30/05/2022"/>
            <ProjectCard title="Feirão do Emprego" summary="Feirão feito em conjunto a diversas empresas para oferecer empregos. Foi realizado dia 30/05/2022"/>
            <ProjectCard title="Feirão do Emprego" summary="Feirão feito em conjunto a diversas empresas para oferecer empregos. Foi realizado dia 30/05/2022"/>
            <ProjectCard title="Feirão do Emprego" summary="Feirão feito em conjunto a diversas empresas para oferecer empregos. Foi realizado dia 30/05/2022"/>
          </div>
        </div>

        <a href="#"></a>
        <Link to="projetos" className="all-projects">Ver todos os projetos</Link>
      </div>

      <div className="news">
        <h1 className="news-section-title">Venha conferir as noticias abaixo sobre a nossa cidade</h1>

        <div className="news-align">
          <div className="news-cards">
            <News url="news" image="feirao-trabalho-news.jpg" title="Feirão do Emprego" summary="Feirão irá acontecer dia 31/05/2022 as 10h em Araquari."/>
            <News url="news" image="news-2.jpeg" title="Feirão do Emprego" summary="Feirão irá acontecer dia 31/05/2022 as 10h em Araquari."/>
            <News url="news" image="news-3.jpeg" title="Feirão do Emprego" summary="Feirão irá acontecer dia 31/05/2022 as 10h em Araquari."/>
            <News url="news" image="news-4.jpg" title="Feirão do Emprego" summary="Feirão irá acontecer dia 31/05/2022 as 10h em Araquari."/>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
