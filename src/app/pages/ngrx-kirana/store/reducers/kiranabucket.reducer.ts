import { createReducer, on } from "@ngrx/store";
import { KiranaBucketModel } from "../../models/kiranabucket.model";
import { addtoKiranaBucket, removeFromKiranaBucket } from "../actions/kiranagrocery.action";

const initialKiranaBuck:KiranaBucketModel[] =[]
export const BucketReducer = createReducer(initialKiranaBuck,on(addtoKiranaBucket,(state,action)=>{
  const isExist = state.find(item=>item.id===action.payload.id)
  if(isExist){
     return state.map(mItem=>mItem.id === action.payload.id ? {...mItem,quantity:mItem.quantity + action.payload.quantity}:mItem)
  }else{
    return [...state,action.payload]
  }
}),on(removeFromKiranaBucket,(state,action)=>{
  const isExist = state.find(item=>item.id===action.payload.id)
  if(isExist){
   return state.map(mItem=>mItem.id === action.payload.id ? {...mItem,quantity:mItem.quantity - 1}:mItem)
  }else{
     return state.filter(item=>item.id!==action.payload.id)
  }

})

)
