import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { Injectable } from '@angular/core';

interface SidebarState {
  isOpened: boolean;
}

const initialState: SidebarState = {
  isOpened: true,
};

@Injectable({ providedIn: 'root' })
export class SidebarStore extends signalStore(
  withState(initialState),
  withMethods((store) => ({
    toggle() {
      patchState(store, (state) => ({
        isOpened: !state.isOpened,
      }));
    },

    open() {
      patchState(store, { isOpened: true });
    },

    close() {
      patchState(store, { isOpened: false });
    },
  }))
) {}
