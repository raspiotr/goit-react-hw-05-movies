import { useLocation, Link } from 'react-router-dom';

export const TitlesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
