import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FilmDto } from '../../../models/film.model';

@Component({
  standalone: true,
  selector: 'app-movie-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent{
  @Input() film!: FilmDto;
  posterFailed = false;

  onPosterError(): void {
    this.posterFailed = true;
  }
}
