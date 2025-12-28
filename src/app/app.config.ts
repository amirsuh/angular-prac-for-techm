import { ApplicationConfig, isDevMode, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { alertReducer } from './store/alert/alert.reducer';
import { kiranaGroceryReducer } from './pages/ngrx-kirana/store/reducers/kirangrocery.reducers';
import {provideStoreDevtools} from '@ngrx/store-devtools'
import { BucketReducer } from './pages/ngrx-kirana/store/reducers/kiranabucket.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),provideStore({ count: counterReducer ,alert: alertReducer,kiranaGorcery:kiranaGroceryReducer,kiranaBucket:BucketReducer}),provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true, // If set to true, the connection is established within the Angular zone
    }),
  ]
};
