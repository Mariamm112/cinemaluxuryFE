import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, catchError } from 'rxjs';
import { FilmDto, CreateFilmRequest, UpdateFilmRequest } from '../../models/film.model';

@Injectable({ providedIn: 'root' })
export class FilmService {
  private base = '/api/films';

  private mock: FilmDto[] = [
    { id: 1, title: 'The Great Adventure', genre: 'Action', releaseDate: '2024-05-01', duration: 120, director: 'Jane Doe', posterUrl: '' },
    { id: 2, title: 'Midnight Show', genre: 'Drama', releaseDate: '2025-01-10', duration: 95, director: 'John Smith', posterUrl: '' }
  ];

  constructor(private http: HttpClient) {}

  getAllFilms(): Observable<FilmDto[]> {
    return this.http.get<FilmDto[]>(this.base).pipe(
      catchError(() => of(this.mock))
    );
  }

  getFilmById(id: number): Observable<FilmDto | undefined> {
    return this.http.get<FilmDto>(`${this.base}/${id}`).pipe(
      catchError(() => of(this.mock.find((m) => m.id === id)))
    );
  }

  createFilm(req: CreateFilmRequest): Observable<FilmDto> {
    try {
      return this.http.post<FilmDto>(this.base, req);
    } catch {
      const newFilm: FilmDto = { id: Date.now(), ...req } as any;
      this.mock.push(newFilm);
      return of(newFilm);
    }
  }

  updateFilm(id: number, req: UpdateFilmRequest): Observable<FilmDto> {
    try {
      return this.http.put<FilmDto>(`${this.base}/${id}`, req);
    } catch {
      const idx = this.mock.findIndex((m) => m.id === id);
      if (idx >= 0) this.mock[idx] = { ...this.mock[idx], ...req } as FilmDto;
      return of(this.mock[idx]);
    }
  }

  deleteFilm(id: number): Observable<void> {
    try {
      return this.http.delete<void>(`${this.base}/${id}`);
    } catch {
      this.mock = this.mock.filter((m) => m.id !== id);
      return of(void 0);
    }
  }
}
