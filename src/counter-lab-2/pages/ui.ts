import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter-lab-2-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './ui.html',
  styles: ``,
})
export class Ui {
  counterService = inject(CounterService);
}
