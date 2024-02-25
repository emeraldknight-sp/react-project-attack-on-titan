import * as IoIcon from "react-icons/io";
import axios from "axios";
import { Button } from "../../components/buttons/Button";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { MouseEvent, useContext, useEffect, useState } from "react";
import { StyledDetailsSection, StyledHome } from "./Home.style";
import { MenuContext } from "../../context/MenuContext";

export const Home = () => {
  const [data, setData] = useState<Movie>();
  // const [trailers, setTrailers] = useState<TrailersResult>();

  const { openMenu } = useContext(MenuContext);

  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;
  const BASE_IMAGE_URL = process.env.REACT_APP_BASE_IMAGE_URL;
  const backgroundURL = BASE_IMAGE_URL + "/original/";
  const MOVIE_ID = 11;

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
      "Content-Type": "Application/json",
    },
  });

  const fetchData = async () => {
    try {
      const res = await axiosInstance.get(`movie/${MOVIE_ID}?language=pt-BR`);

      setData(res.data);
    } catch (error) {
      console.error("Erro durante a requisição:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchTrailers = async () => {
    try {
      // const { id } = data || {};
      // const res = await axiosInstance.get(`/movie/${id}/videos`);
      // const { results } = res.data;
      // setTrailers({
      //   id: res.data.id,
      //   results: results
      //     .filter((el: Trailer) => el.official === true)
      //     .slice(0, 3),
      // });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (data && data.id) {
      const timerId = setTimeout(() => fetchTrailers(), 2000);
      return () => clearTimeout(timerId);
    }
  }, [data]);

  if (!data) {
    return <div>Carregando...</div>;
  }

  const handleClick = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <StyledHome
      style={{
        backgroundImage: `url(${backgroundURL}/${data.backdrop_path})`,
        backgroundSize: "cover",
        overflow: openMenu ? "hidden" : "",
      }}
    >
      <Header />
      <main className="main">
        <Container className="main__container">
          <StyledDetailsSection>
            <ul className="details__list-genres">
              {data.genres.map((genre, index) => (
                <li key={index} className="details__genre">
                  {genre.name}
                </li>
              ))}
            </ul>
            <h3 className="details__title">{data.title}</h3>
            <p className="details__description">{data.overview}</p>
            <div className="details__average">
              <IoIcon.IoIosStar />
              <div>
                <p>
                  Nota da <span>IMDb</span>
                </p>
                <p>{data.vote_average.toFixed(1)}/10</p>
              </div>
            </div>
            <div className="group-button">
              {data.homepage === "" ? (
                <Button
                  type="button"
                  variant="contained"
                  color="primary"
                  rounded="md"
                  size="md"
                  ariaLabel="Em breve"
                  onClick={handleClick}
                  disabled
                >
                  <IoIcon.IoIosHourglass size={24} />
                  <a href={data.homepage} target="_blank" rel="noreferrer">
                    Em breve
                  </a>
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="contained"
                  color="primary"
                  rounded="md"
                  size="md"
                  ariaLabel="Assistir agora"
                  onClick={handleClick}
                >
                  <IoIcon.IoIosPlay size={24} />
                  <a href={data.homepage} target="_blank" rel="noreferrer">
                    Assistir agora
                  </a>
                </Button>
              )}
              <Button
                type="button"
                variant="contained"
                color="tertiary"
                rounded="md"
                size="md"
                ariaLabel="Assistir agora"
                onClick={handleClick}
              >
                <IoIcon.IoMdAdd size={24} />
                <a href="/">Adicionar aos favoritos</a>
              </Button>
            </div>
          </StyledDetailsSection>
          {/* <StyledTeaserTrailerSection>
            {trailers ? (
              trailers.results.map((trailer, index) => (
                <div key={index} className="iframe__container">
                  <iframe
                    src={`https://www.youtube.com/embed/${trailer.key}?autoplay=0&mute=1`}
                    title={trailer.name}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ))
            ) : (
              <div></div>
            )}
          </StyledTeaserTrailerSection> */}
        </Container>
      </main>
    </StyledHome>
  );
};

// const [data, setData] = useState<Movie[]>();

// const url = `${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;

// const headers = {
//   accept: "application/json",
//   Authorization: `Bearer ${AUTH_TOKEN}`,
// };

// try {
//   const res = await fetch(url, { method: "GET", headers });

//   if (!res.ok) {
//     throw new Error(`HTTP error! Status: ${res.status}`);
//   }

//   const data = await res.json();
//   setData(data);
// } catch (error) {
//   console.error("Error:", error);
// }

// const API_KEY = process.env.REACT_APP_API_KEY;
// {
/* <section>
            <h3></h3>
            <div>
              {data.results.map((movie, index) => (
                <div key={index}>
                  <img
                    src={`${process.env.REACT_APP_BASE_IMAGE_URL}w200${movie.poster_path}`}
                    alt=""
                  />
                  <p>{movie.title}</p>
                  <p>{movie.vote_average}</p>
                  <button type="button">Ver</button>
                </div>
              ))}
            </div>
          </section> */
// }
