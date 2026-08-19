import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-recent-movies',
  imports: [CommonModule],
  template: `
  <div class="recent-card">
    <div class="header"><h3>Recently Added Films</h3><a class="view-all">View all →</a></div>
    <div class="items">
      <div class="item" *ngFor="let m of movies">
        <img *ngIf="m.posterUrl" [src]="m.posterUrl" alt="poster" class="thumb"/>
        <div class="meta">
          <div class="title">{{ m.title }}</div>
          <div class="sub">{{ m.genre }} • {{ m.releaseDate | date:'yyyy' }}</div>
          <div class="sub">{{ m.duration }} min • ★ {{ m.rating || '—' }}</div>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: [
    `.recent-card{background:var(--card-bg);padding:16px;border-radius:14px}`,
    `.header{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}`,
    `.header h3{margin:0;font-size:18px}`,
    `.view-all{color:var(--accent);cursor:pointer;font-weight:700}`,
    `.items{display:flex;flex-direction:column;gap:12px}`,
    `.item{display:flex;gap:12px;align-items:center}`,
    `.thumb{width:72px;height:100px;object-fit:cover;border-radius:8px;box-shadow:0 12px 30px rgba(0,0,0,0.6)}`,
    `.meta .title{font-weight:700;color:#fff}`,
    `.sub{font-size:13px;color:var(--muted-weak)}`
  ]
})
export class RecentMoviesComponent{
  @Input() movies: any[] = [];
}
