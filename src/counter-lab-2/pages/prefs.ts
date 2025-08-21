import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter-lab-2-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './prefs.html',
  styles: ``,
})
export class Prefs {
  counterService = inject(CounterService);
}
