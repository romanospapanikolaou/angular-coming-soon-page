import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css'],
})
export class ComingSoonComponent implements OnInit, OnDestroy {
  countdays: string = '';
  counthours: string = '';
  countminutes: string = '';
  countseconds: string = '';
  private countInterval: any;

  constructor() {}

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    if (this.countInterval) {
      clearInterval(this.countInterval);
    }
  }

  private startCountdown(): void {
    const targetDate = new Date('2025-05-19T20:00:00').getTime();

    this.countInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(this.countInterval);
        this.resetCountdown();
        return;
      }

      this.updateCountdown(distance);
    }, 1000);
  }

  private updateCountdown(distance: number): void {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.countdays = `${days}`;
    this.counthours = `${hours}`;
    this.countminutes = `${minutes}`;
    this.countseconds = `${seconds}`;
  }

  private resetCountdown(): void {
    this.countdays = '0';
    this.counthours = '0';
    this.countminutes = '0';
    this.countseconds = '0';
  }
}
