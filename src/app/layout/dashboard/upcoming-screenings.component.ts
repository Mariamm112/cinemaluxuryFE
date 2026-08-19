import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-upcoming-screenings',
  template: `
  <div class="upcoming-card">
    <div class="header"><h3>Upcoming Screenings</h3></div>
    <div class="list">
      <div class="row" *ngFor="let s of screenings">
        <img *ngIf="s.posterUrl" [src]="s.posterUrl" class="thumb"/>
        <div class="info">
          <div class="title">{{ s.title }}</div>
          <div class="sub">{{ s.cinema }} • {{ s.room }}</div>
          <div class="time">{{ s.date }} • {{ s.time }}</div>
        </div>
      </div>
    </div>
    <div class="footer"><a class="view">View schedule →</a></div>
  </div>
  `,
  styles: [
    `.upcoming-card{background:var(--card-bg);padding:16px;border-radius:14px}`,
    `.header h3{margin:0;font-size:18px}`,
    `.list{display:flex;flex-direction:column;gap:10px;margin-top:12px}`,
    `.row{display:flex;gap:12px;align-items:center}`,
    `.thumb{width:56px;height:78px;object-fit:cover;border-radius:6px}`,
    `.info .title{font-weight:700;color:#fff}`,
    `.sub{color:var(--muted-weak);font-size:13px}`,
    `.time{color:var(--muted-weak);font-size:13px}`,
    `.footer{margin-top:12px;text-align:right}.view{color:var(--accent);font-weight:700}`
  ]
})
export class UpcomingScreeningsComponent{
  @Input() screenings: any[] = [];
}
