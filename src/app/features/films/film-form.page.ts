import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from './film.service';
import { FilmDto } from '../../models/film.model';

@Component({
  standalone: true,
  selector: 'app-film-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './film-form.page.html',
  styleUrls: ['./film-form.page.css']
})
export class FilmFormPage {
  form: FormGroup;

  editingId?: number;

  constructor(private fb: FormBuilder, private service: FilmService, private route: ActivatedRoute, private router: Router) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      genre: [''],
      releaseDate: [''],
      duration: [null],
      director: [''],
      posterUrl: ['']
    });

    const id = this.route.snapshot.params['id'];
    if (id) {
      this.editingId = Number(id);
      this.service.getFilmById(this.editingId).subscribe((f) => {
        if (f) this.form.patchValue(f as any);
      });
    }
  }

  save() {
    if (this.form.invalid) return;
    const payload = this.form.value as any;
    if (this.editingId) {
      this.service.updateFilm(this.editingId, payload).subscribe(() => this.router.navigate(['/films']));
    } else {
      this.service.createFilm(payload).subscribe(() => this.router.navigate(['/films']));
    }
  }

  cancel() {
    this.router.navigate(['/films']);
  }
}
