import * as IoIcon from "react-icons/io";
import axios from "axios";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { MenuContext } from "../../context/MenuContext";
import { MouseEvent, useContext, useEffect, useState } from "react";
import {
  StyledDetailsSection,
  StyledHome,
  StyledTeaserTrailerSection,
} from "./Home.style";

export const Home = () => {
  const [data, setData] = useState<TVSerie>();
  const [trailers, setTrailers] = useState<TrailersResult>();

  const { openMenu } = useContext(MenuContext);

  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;
  const BASE_IMAGE_URL = process.env.REACT_APP_BASE_IMAGE_URL;
  const backgroundURL = BASE_IMAGE_URL + "/original/";
  const MOVIE_ID = 1429;

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
      "Content-Type": "Application/json",
    },
  });

  const fetchData = async () => {
    try {
      const res = await axiosInstance.get(`tv/${MOVIE_ID}?language=pt-BR`);

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
      const { id } = data || {};
      const res = await axiosInstance.get(`/tv/${id}/videos`);
      const { results } = res.data;
      setTrailers({
        id: res.data.id,
        results: results
          // .filter((el: Trailer) => el.official === true)
          .slice(0, 3),
      });
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
        height: openMenu ? "100vh" : "",
        overflow: openMenu ? "hidden" : "",
      }}
    >
      <Header />
      <Main>
        <StyledDetailsSection>
          {data.number_of_seasons ? (
            <span className="details__season">
              {data.number_of_seasons}ª Temporada
            </span>
          ) : (
            <ul className="details__list-genre">
              {data.genres.map((genre, index) => (
                <li key={index} className="details__genre">
                  {genre.name}
                </li>
              ))}
            </ul>
          )}
          <h3 className="details__title">{data.name}</h3>
          <p className="details__description">{data.overview}</p>
          <div className="details__group-details">
            <div className="details__average">
              <IoIcon.IoIosStar className="details__average--icon" />
              <div className="details__average--content">
                <p className="details__average--label">
                  Nota da&nbsp;
                  <span className="details__average--label-source">IMDb</span>
                </p>
                <p className="details__average--score">
                  {data.vote_average.toFixed(1)}/10
                </p>
              </div>
            </div>
            <div className="details__group-button">
              {data.homepage === "" ? (
                <a
                  href={data.homepage}
                  className="details__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    color="primary"
                    rounded="lg"
                    size="md"
                    ariaLabel="Em breve"
                    onClick={handleClick}
                    disabled
                  >
                    <IoIcon.IoIosHourglass size={24} />
                    <span>Em breve</span>
                  </Button>
                </a>
              ) : (
                <a
                  href={data.homepage}
                  className="details__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    color="primary"
                    rounded="lg"
                    size="md"
                    ariaLabel="Assistir agora"
                    onClick={handleClick}
                  >
                    <IoIcon.IoIosPlay size={24} />
                    <span>Assistir agora</span>
                  </Button>
                </a>
              )}
              <a href="/" className="details__link">
                <Button
                  color="tertiary"
                  rounded="lg"
                  size="md"
                  ariaLabel="Adicionar a lista"
                  onClick={handleClick}
                >
                  <IoIcon.IoMdAdd size={24} />
                  <span>Adicionar a lista</span>
                </Button>
              </a>
            </div>
          </div>
        </StyledDetailsSection>
        <StyledTeaserTrailerSection>
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
        </StyledTeaserTrailerSection>
      </Main>
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
                  <button>Ver</button>
                </div>
              ))}
            </div>
          </section> */
// }
