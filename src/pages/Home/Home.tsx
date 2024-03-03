import * as IoIcon from "react-icons/io";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { MenuContext } from "../../context/MenuContext";
import { MouseEvent, useContext, useEffect, useRef, useState } from "react";
import {
  StyledDetailsSection,
  StyledHome,
  StyledModalButton,
  StyledModalContainer,
  StyledModalContent,
  StyledTeaserTrailerSection,
} from "./Home.style";
import { Loading } from "../../components/Loading";
import { DataContext } from "../../context/DataContext";
import { Frame } from "../../components/Frame";
import Music from "../../assets/music/bauklötze.mp3";

export const Home = () => {
  const BASE_IMAGE_URL = process.env.REACT_APP_BASE_IMAGE_URL;
  const backgroundURL = BASE_IMAGE_URL + "/original/";

  const { data, trailers } = useContext(DataContext);
  const { openMenu } = useContext(MenuContext);
  const [openModal, setOpenModal] = useState(true);
  const [loading, setLoading] = useState(true);
  const [play, setPlay] = useState(false);

  const audioRef = useRef(new Audio(Music));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    if (play) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [play]);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(delay);
  }, []);

  const handleClick = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };

  const handlePlayMusic = (play: boolean) => {
    setPlay(play);
    setOpenModal(!openModal);
  };

  return !loading && data ? (
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
        <StyledModalContainer
          style={{
            display: openModal ? "flex" : "none",
          }}
        >
          <StyledModalContent>
            <span className="modal__answer">
              Para desfrutar de uma maior imersão nesta página deseja reproduzir
              áudio?
            </span>
            <div className="modal__button-group">
              <StyledModalButton
                size="md"
                onClick={() => handlePlayMusic(false)}
              >
                Não
              </StyledModalButton>
              <StyledModalButton
                size="md"
                onClick={() => handlePlayMusic(true)}
              >
                Sim
              </StyledModalButton>
            </div>
          </StyledModalContent>
        </StyledModalContainer>
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
          <p className="details__description">
            {data.seasons[data.number_of_seasons].overview}
          </p>
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
          {trailers?.results && trailers.results.length > 0 ? (
            trailers.results
              .map((trailer, index) => <Frame key={index} video={trailer} />)
              .slice(0, 3)
          ) : (
            <div></div>
          )}
        </StyledTeaserTrailerSection>
      </Main>
    </StyledHome>
  ) : (
    <Loading />
  );
};
