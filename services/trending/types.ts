import type { ResponseListType } from '@/types';

export enum TrendingPeriodEnum {
  day = 'day',
  week = 'week',
};

export type TrendingMovieResponseItemType = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: Array<number>;
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TrendingSeriesResponseItemType = Omit<
  TrendingMovieResponseItemType,
  'title'
  | 'original_title'
  | 'release_date'
  | 'video'
> & {
  name: string,
  original_name: string,
  first_air_date: string,
  origin_country: Array<string>,
};

export type TrendingPersonResponseItemType = {
  adult: boolean;
  id: number;
  name: string;
  original_name: string;
  media_type: string;
  popularity: number;
  gender: number;
  known_for_department: string;
  profile_path: string;
  known_for: Array<TrendingMovieResponseItemType>;
};

export type TrendingAllResponseItemType =
  TrendingMovieResponseItemType
  | TrendingSeriesResponseItemType
  | TrendingPersonResponseItemType;

export type TrendingAllResponseType = ResponseListType<TrendingAllResponseItemType>;
export type TrendingMovieResponseType = ResponseListType<TrendingMovieResponseItemType>;
export type TrendingSeriesResponseType = ResponseListType<TrendingSeriesResponseItemType>;
export type TrendingPersonResponseType = ResponseListType<TrendingPersonResponseItemType>;
