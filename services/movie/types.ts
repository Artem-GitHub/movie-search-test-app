import type { FetchResponse } from 'ofetch';
import type { ResponseListType } from '@/types';

export type MovieDetailsResponseType = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: string | null;
  budget: number | null;
  genres: [
    {
      id: number,
      name: string | null,
    },
  ];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string | null;
  original_title: string | null;
  overview: string | null;
  popularity: number | null;
  poster_path: string | null;
  production_companies: [
    {
      id: number,
      logo_path: string | null,
      name: string | null,
      origin_country: string | null,
    },
  ];
  production_countries: [
    {
      iso_3166_1: string | null,
      name: string | null,
    },
  ];
  release_date: string | null;
  revenue: number | null;
  runtime: number | null;
  spoken_languages: [
    {
      english_name: string | null,
      iso_639_1: string | null,
      name: string | null,
    }
  ];
  status: string | null;
  tagline: string | null;
  title: string | null;
  video: boolean;
  vote_average: number | null;
  vote_count: number | null;
};

export type MoviePopularResponseItemType = Omit<
  MovieDetailsResponseType,
  'belongs_to_collection'
  | 'budget'
  | 'genres'
  | 'homepage'
  | 'imdb_id'
  | 'production_companies'
  | 'production_countries'
  | 'revenue'
  | 'runtime'
  | 'spoken_languages'
  | 'status'
  | 'tagline'
> & { genre_ids: [number] };

export type MoviePopularResponseType = ResponseListType<MoviePopularResponseItemType>;
