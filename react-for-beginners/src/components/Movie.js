import { Link } from "react-router-dom";
import PropType from "prop-types";

function Movie({ id, coverImg, title, summary, rating, year, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>
        {summary.length > 235
          ? `${summary.slice(0, 235)}`
          : summary.length < 1
          ? "[ 영화 소개 글이 비어있어서 제가 채운겁니다!!! ] "
          : summary}
      </p>
      <p>{`평점: ${rating}`}</p>
      <p>{`개봉년도: ${year}`}</p>
      <ul>
        {genres.map((data) => (
          <li key={data}>{`tag: ${data}`}</li>
        ))}
      </ul>
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
