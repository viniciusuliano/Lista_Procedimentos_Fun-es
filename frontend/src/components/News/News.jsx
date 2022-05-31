import './News.css';
import { Link } from 'react-router-dom'

function News(props) {
  return (
    <Link to={props.url} className="News">
      <div className="news-texts">
        <h1 className="news-title">{props.title}</h1>
        <p className="news-summary">{props.summary}</p>
      </div>

      <img src={`images/` + props.image} alt="" />
    </Link>
  );
}

export default News;