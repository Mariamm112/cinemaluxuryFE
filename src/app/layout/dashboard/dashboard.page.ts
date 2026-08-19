import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatCardComponent } from '../../shared/components/stat-card/stat-card.component';
import { RecentMoviesComponent } from './recent-movies.component';
import { UpcomingScreeningsComponent } from './upcoming-screenings.component';
import { MovieCardComponent } from '../../shared/components/movie-card/movie-card.component';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [CommonModule, StatCardComponent, RecentMoviesComponent, UpcomingScreeningsComponent, MovieCardComponent],
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.css']
})
export class DashboardPage {
  stats = [
    { icon: '🎬', label: 'Total Films', value: 124, meta: '+8 this month' },
    { icon: '🎭', label: 'Directors', value: 78, meta: '+1 this month' },
  ];

  recent = [
    { id: 1, title: 'Interstellar', genre: 'Sci-Fi', releaseDate: '2014-11-07', duration: 169, posterUrl: '/assets/posters/interstellar.jpg', rating: 8.7 },
    { id: 2, title: 'Oppenheimer', genre: 'Drama', releaseDate: '2023-07-21', duration: 180, posterUrl: '/assets/posters/oppenheimer.jpg', rating: 8.6 },
    { id: 3, title: 'Dune', genre: 'Sci-Fi', releaseDate: '2021-10-22', duration: 155, posterUrl: '/assets/posters/dune.jpg', rating: 8.1 },
    { id: 4, title: 'The Batman', genre: 'Action', releaseDate: '2022-03-04', duration: 176, posterUrl: '/assets/posters/batman.jpg', rating: 7.9 }
  ];

  screenings = [
    { title: 'Dune: Part Two', cinema: 'Cinema 1', room: 'Room 04', date: 'Today', time: '20:30', posterUrl: '/assets/posters/dune.jpg' },
    { title: 'Oppenheimer', cinema: 'Cinema 2', room: 'Room 01', date: 'Tomorrow', time: '18:00', posterUrl: '/assets/posters/oppenheimer.jpg' },
    { title: 'Interstellar', cinema: 'Cinema 1', room: 'Room 02', date: '2026-08-22', time: '21:00', posterUrl: '/assets/posters/interstellar.jpg' },
    { title: 'The Batman', cinema: 'Cinema 3', room: 'Room 05', date: '2026-08-23', time: '19:30', posterUrl: '/assets/posters/batman.jpg' }
  ];
}
