import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { KiranaGroceryModel } from "../../models/kiranagrocery.model";


export const kiranaGrocAction = createActionGroup({
  source:'kirana Groc Api',
  events:{
    "Load kirana Grocery": emptyProps(),
    "Load kirana Grocery Success": props<{payload:KiranaGroceryModel[]}>(),
    "Load kirana Grocery Failure": emptyProps(),
  }
})
