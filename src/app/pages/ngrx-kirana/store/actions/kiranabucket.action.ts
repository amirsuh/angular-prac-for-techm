import { createAction, props } from "@ngrx/store";
import { KiranaBucketModel } from "../../models/kiranabucket.model";


export const addtoKiranaBucket = createAction('[MedBucket] Add',props<{payload:KiranaBucketModel}>())
export const removeFromKiranaBucket = createAction('[MedBucket] Remove',props<{payload:Partial<KiranaBucketModel>}>())
