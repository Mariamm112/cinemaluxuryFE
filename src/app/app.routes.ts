import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { FilmsListPage } from './features/films/films-list.page';
import { FilmDetailsPage } from './features/films/film-details.page';
import { FilmFormPage } from './features/films/film-form.page';
import { PublicLayoutComponent } from './layout/public-layout.component';
import { HomePage } from './features/home/home.page';
import { LoginPage } from './features/auth/login.page';
import { RegisterPage } from './features/auth/register.page';

export const routes: Routes = [
	{
		path: '',
		component: PublicLayoutComponent,
		children: [
			{ path: '', component: HomePage },
			{ path: 'login', component: LoginPage },
			{ path: 'register', component: RegisterPage },
			{ path: 'movies', component: FilmsListPage },
			{ path: 'films', redirectTo: 'movies', pathMatch: 'full' },
			{ path: 'movies/new', component: FilmFormPage },
			{ path: 'movies/:id', component: FilmDetailsPage, data: { renderMode: 'client' } },
			{ path: 'movies/:id/edit', component: FilmFormPage, data: { renderMode: 'client' } }
		]
	},
	{
		path: 'admin',
		component: LayoutComponent,
		children: [
			{ path: '', redirectTo: 'films', pathMatch: 'full' },
			{ path: 'films', component: FilmsListPage },
			{ path: 'films/new', component: FilmFormPage },
			{ path: 'films/:id', component: FilmDetailsPage, data: { renderMode: 'client' } },
			{ path: 'films/:id/edit', component: FilmFormPage, data: { renderMode: 'client' } }
		]
	}
];
