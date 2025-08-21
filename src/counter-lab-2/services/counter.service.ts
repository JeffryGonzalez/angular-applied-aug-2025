import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';

@Component({
  selector: 'app-counter-service',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ``,
  styles: ``,
})
export class CounterService {
  current_count = signal(0);
  count_step = signal(1);

  public updateCountStep(newCount: number) {
    this.count_step.set(newCount);
  }

  public incrementCount() {
    this.current_count.update((c) => c + this.count_step());
  }

  public decrementCount() {
    this.current_count.update((c) => c - this.count_step());
  }

  belowZero = computed(() => {
    return this.current_count() - this.count_step() < 0;
  });

  divisibleByThree = computed(() => {
    return this.current_count() % 3 == 0;
  });

  divisibleByFive = computed(() => {
    return this.current_count() % 5 == 0;
  });
}
