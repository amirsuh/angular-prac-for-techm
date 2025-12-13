import { createAction, props } from "@ngrx/store";


export const showAlert =  createAction('[Alert] Show',props<{message:string}>())
export const hideAlert = createAction('[Alert] Hide')
