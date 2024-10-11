import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropType from "prop-types";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  console.log(id);

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovies(json.data.movie);
    setLoading(false);
  };
  console.log(`movies : `, movies);

  return (
    <div>
      <h1>{`${movies.title_long}`}</h1>
      <a href="http://localhost:3000/movie" />
      <img src={movies.background_image_original}></img>
      <p>{`평점 : ${movies.rating}`}</p>
      <ul className={movies.genres}>
        {movies.genres?.map((data) => (
          <li key={data}>{`${data}`}</li>
        ))}
      </ul>
    </div>
  );
}
Detail.propType = {
  id: PropType.string.isRequired,
  coverImg: PropType.string.isRequired,
  title: PropType.string.isRequired,
  summary: PropType.string.isRequired,
  rating: PropType.string.isRequired,
  year: PropType.string.isRequired,
  genres: PropType.arrayOf(PropType.string).isRequired,
};
export default Detail;
