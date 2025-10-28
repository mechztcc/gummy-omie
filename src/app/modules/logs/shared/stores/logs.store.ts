import { Injectable } from '@angular/core';
import { LogsState } from './logs-state.interface';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

const initialState: LogsState = {
  data: [],
};

@Injectable({ providedIn: 'root' })
export class LogsStore extends signalStore(
  withState(initialState),
  withMethods((store) => ({
    setData(data: any[]) {
      patchState(store, { data });
    },

    clearData() {
      patchState(store, { data: [] });
    },
  }))
) {}
