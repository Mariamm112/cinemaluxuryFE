import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../../shared/components/movie-card/movie-card.component';
import { FilmService } from './film.service';
import { Observable } from 'rxjs';
import { FilmDto } from '../../models/film.model';

@Component({
  standalone: true,
  selector: 'app-films-list',
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './films-list.page.html',
  styleUrls: ['./films-list.page.css']
})
export class FilmsListPage {
  films$!: Observable<FilmDto[]>;

  constructor(private service: FilmService) {
    this.films$ = this.service.getAllFilms();
  }
}
