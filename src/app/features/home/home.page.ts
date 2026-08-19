import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MovieCardComponent } from '../../shared/components/movie-card/movie-card.component';
import { FilmService } from '../films/film.service';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, RouterLink, MovieCardComponent],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage {
  constructor(public films: FilmService) {}
  get nowShowing$(){ return this.films.getAllFilms(); }
}
