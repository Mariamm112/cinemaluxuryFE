import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FilmService } from './film.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FilmDto } from '../../models/film.model';

@Component({
  standalone: true,
  selector: 'app-film-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.css']
})
export class FilmDetailsPage {
  film$!: Observable<FilmDto | undefined>;

  constructor(private route: ActivatedRoute, private service: FilmService) {
    this.film$ = this.route.params.pipe(
      switchMap((p) => this.service.getFilmById(Number(p['id'])))
    );
  }
}
