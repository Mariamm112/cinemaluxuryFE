export interface FilmDto {
  id: number;
  title: string;
  description?: string;
  genre?: string;
  releaseDate?: string;
  duration?: number;
  director?: string;
  posterUrl?: string;
  backdropUrl?: string;
  rating?: number | string;
}

export interface CreateFilmRequest {
  title: string;
  description?: string;
  genre?: string;
  releaseDate?: string;
  duration?: number;
  director?: string;
  posterUrl?: string;
}

export type UpdateFilmRequest = Partial<CreateFilmRequest>;
