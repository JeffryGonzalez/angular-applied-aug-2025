import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  watchState,
  withComputed,
  withHooks,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';

const BY_VALUES = [1, 3, 5, 42, 99] as const;

export type ByValues = (typeof BY_VALUES)[number];
type CounterState = {
  by: ByValues;
  current: number;
  history: number[];
};

function isPrime(num: number): boolean {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function isCounterState(obj: any): obj is CounterState {
  return (
    obj &&
    typeof obj.current === 'number' &&
    typeof obj.by === 'number' &&
    Array.isArray(obj.history)
  );
}

export const CounterStore = signalStore(
  withProps(() => ({
    byValues: BY_VALUES,
  })),
  withState<CounterState>({
    by: 1,
    current: 0,
    history: [0],
  }),
  withMethods((store) => {
    return {
      setBy: (by: ByValues) => patchState(store, { by }),
      increment: () => {
        const next = store.current() + store.by();
        patchState(store, {
          current: next,
          history: [...store.history(), next],
        });
        console.log('Incremented:', next);
      },
      decrement: () => {
        const next = store.current() - store.by();
        patchState(store, {
          current: next,
          history: [...store.history(), next],
        });
        console.log('Decremented:', next);
      },
      reset: () => {
        patchState(store, {
          current: 0,
          history: [0],
        });
        console.log('Counter reset');
      },
    };
  }),
  withComputed((store) => ({
    decrementShouldBeDisabled: computed(() => store.current() - store.by() < 0),
    fizzBuzz: computed(() => {
      const current = store.current();
      if (current === 0) return '';
      if (current % 3 === 0 && current % 5 === 0) {
        return 'FizzBuzz';
      }
      if (current % 3 === 0) {
        return 'Fizz';
      }
      if (current % 5 === 0) {
        return 'Buzz';
      }
      return '';
    }),
    isPrime: computed(() => isPrime(store.current())),
    historyLength: computed(() => store.history().length),
  })),
  withHooks({
    onInit(store) {
      console.log('Created A Counter Store');
      const savedState = localStorage.getItem('counter-state');
      if (savedState) {
        try {
          const actualState = JSON.parse(savedState);
          if (isCounterState(actualState)) {
            patchState(store, actualState);
          }
        } catch {
          // ignore
        }
      }
      watchState(store, (state) => {
        localStorage.setItem('counter-state', JSON.stringify(state));
      });
    },
    onDestroy() {
      console.log('Counter Store Destroyed');
    },
  }),
);
