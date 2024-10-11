import { Link } from "react-router-dom";
import PropType from "prop-types";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, summary, rating, year, genres }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>

        <h3 className={styles.movie__year}>{`개봉년도: ${year}`}</h3>
        <p>
          {summary.length > 235
            ? `${summary.slice(0, 235)}`
            : summary.length < 1
            ? "[ 영화 소개 글이 비어있어서 제가 채운겁니다!!! ] "
            : summary}
        </p>
        <p className={styles.movie__rating}>{`평점: ${rating}`}</p>
        <ul className={styles.movie__genres}>
          {genres.map((data) => (
            <li key={data}>{`${data}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propType = {
  id: PropType.string.isRequired,
  coverImg: PropType.string.isRequired,
  title: PropType.string.isRequired,
  summary: PropType.string.isRequired,
  rating: PropType.string.isRequired,
  year: PropType.string.isRequired,
  genres: PropType.arrayOf(PropType.string).isRequired,
};

export default Movie;
