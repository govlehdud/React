import PropType from "prop-types";

function Movie({ coverImg, title, summary, rating, year, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <p>{summary}</p>
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
  coverImg: PropType.string.isRequired,
  title: PropType.string.isRequired,
  summary: PropType.string.isRequired,
  rating: PropType.string.isRequired,
  year: PropType.string.isRequired,
  genres: PropType.arrayOf(PropType.string).isRequired,
};

export default Movie;
