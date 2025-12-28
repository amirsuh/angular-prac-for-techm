import { createSelector } from "@ngrx/store";
import { KiranaGroceryModel } from "../../models/kiranagrocery.model";

export const selectKiranaGroc = (state:{kiranaGorcery:KiranaGroceryModel[]})=> state.kiranaGorcery

// export const selectKiranaGrocByTpe = createSelector(selectKiranaGroc ,(state)=>{
//   return state.filter(item =>item.category == "Pulses")
// })

export const selectKiranaGrocByTpe =
(type:string)=>
   createSelector(selectKiranaGroc,(state)=>{
  console.log("select by type called")
  return state.filter(item =>item.category===type)
})
