import { createSelector } from '@ngrx/store';

export const selectAlert = (state: any) => state.alert;

export const selectAlertMessage = createSelector(
  selectAlert,
  state => state.message
);
