import { createReducer, on } from "@ngrx/store";
import { hideAlert, showAlert } from "./alert.action";


export interface alertState{
  message:string | null;
}
export const initialState:alertState = {
  message:null
}

export const alertReducer = createReducer(
  initialState,
  on(showAlert, (state, { message }) => ({ ...state, message })),
  on(hideAlert, (state) => ({ ...state, message: null }))
);

// export const alertReducer = createReducer(initialValue,on(showAlert,(state,{message})=>({...state,message})),
// on(hideAlert,(state)=>{...state,message:null}))
