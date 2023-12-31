import { useLocation, Link } from 'react-router-dom';
import css from './TitlesList.module.css';
import PropTypes from 'prop-types';

export const TitlesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <ul>
        {movies.map(movie => (
          <li className={css.ListItem} key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

TitlesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
