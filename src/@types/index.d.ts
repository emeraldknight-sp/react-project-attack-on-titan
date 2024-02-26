/// <reference types="react-scripts" />

interface ButtonProps {
  onClick: (e: any) => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  color?: "primary" | "secondary" | "tertiary" | string;
  rounded: "sm" | "md" | "lg" | "full";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string | null;
  backdrop_path: string | null;
}

interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: BelongsToCollection | null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MovieResult {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MovieList {
  page: number;
  results: MovieResult[];
  total_pages: number;
  total_results: number;
}

interface Trailer {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official?: boolean;
  published_at?: string;
  id: string;
}

interface TrailersResult {
  id: number;
  results: Trailer[];
}

interface MenuContextProviderProps {
  children: React.ReactNode;
}

interface MenuContextProps {
  openMenu: boolean;
  handleOpenMenu: () => void;
}
