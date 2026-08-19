import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-stat-card',
  template: `
  <div class="stat-card">
    <div class="left">
      <div class="icon">{{ icon }}</div>
    </div>
    <div class="main">
      <div class="label">{{ label }}</div>
      <div class="value">{{ value }}</div>
      <div class="meta" *ngIf="meta">{{ meta }}</div>
    </div>
  </div>
  `,
  styles: [
    `:host{display:block}`,
    `.stat-card{display:flex;gap:12px;background:var(--card-bg);padding:16px;border-radius:12px;box-shadow:0 12px 30px rgba(0,0,0,0.6);border:1px solid rgba(255,255,255,0.02);align-items:center}`,
    `.stat-card:hover{transform:translateY(-6px);box-shadow:0 20px 44px rgba(0,0,0,0.7);border-color:rgba(229,9,20,0.12)}`,
    `.icon{width:44px;height:44px;border-radius:8px;background:rgba(255,255,255,0.03);display:flex;align-items:center;justify-content:center;color:var(--accent);font-weight:700}`,
    `.label{font-size:12px;color:var(--muted-weak);text-transform:uppercase;letter-spacing:0.6px}`,
    `.value{font-size:26px;font-weight:700;color:#fff;margin-top:6px}`,
    `.meta{font-size:12px;color:var(--muted-weak);margin-top:6px}`
  ]
})
export class StatCardComponent{
  @Input() icon = '🎬';
  @Input() label = '';
  @Input() value: string | number = '';
  @Input() meta?: string;
}
