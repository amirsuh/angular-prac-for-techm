import { createReducer, on } from "@ngrx/store"
import { KiranaGroceryModel } from "../../models/kiranagrocery.model"
import { kiranaGrocAction } from "../actions/kiranagrocery.action"

const initialKiranaGroc:KiranaGroceryModel[] = []
export const kiranaGroceryReducer = createReducer(initialKiranaGroc,on(kiranaGrocAction.loadKiranaGrocerySuccess,(state,action)=>{
return action.payload
}),on(kiranaGrocAction.loadKiranaGroceryFailure,(state,action)=>{
  return []
}))
