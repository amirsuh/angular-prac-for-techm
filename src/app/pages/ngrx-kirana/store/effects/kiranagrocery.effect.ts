import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { KiranaService } from '../../kirana-service';
import { kiranaGrocAction } from '../actions/kiranagrocery.action';

@Injectable()
export class kiranGrocEffects{
  private actions$ = inject(Actions)
  private kiranagrocService = inject(KiranaService)

  loadKiranaGroc$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(kiranaGrocAction.loadKiranaGrocery),
      exhaustMap(()=>
        this.kiranagrocService.fetchAllGroceries().pipe(
          map((groceries:any) => {
            return (kiranaGrocAction.loadKiranaGrocerySuccess({payload:groceries}))
          }),
          catchError(() => of(kiranaGrocAction.loadKiranaGroceryFailure()))
        )
      )
    )
  })

}
