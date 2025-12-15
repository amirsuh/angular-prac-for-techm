import { Component, inject, Input, OnInit } from '@angular/core';
import { IForm, IFormControls } from '../../shared/interface/dynamic-form.interface';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './dynamic-form.html',
  styleUrl: './dynamic-form.scss',
})
export class DynamicForm implements OnInit {
  @Input() form!: IForm;
   fb = inject(FormBuilder);
  dynamicForm:FormGroup = this.fb.group({});
  isSubmitted: boolean = false;
  submitForm:any =[]
  editFlag:boolean=false
  constructor() {
    // this.dynamicForm = this.fb.group({}, { updateOn: 'submit' });
  }

  ngOnInit(): void {
    if (this.form.formControls) {
      const formGroup:any = {}
      this.form.formControls.forEach((controls)=>{
      const controlValidators:any=[]
      if(controls.validators){
        controls.validators.forEach((vali)=>{
          if(vali.validationName == 'required') controlValidators.push(Validators.required)
          if(vali.validationName == 'minlength') controlValidators.push(Validators.minLength(vali.minLength as number))
          if(vali.validationName == 'maxlength') controlValidators.push(Validators.maxLength(vali.maxLength as number))
          if(vali.validationName == 'pattern') controlValidators.push(Validators.pattern(vali.pattern as string))
          if (vali.validationName === 'email')   controlValidators.push(Validators.email);
          })
       formGroup[controls.name] = [controls.value || '',controlValidators]
      }
    })
      this.dynamicForm = this.fb.group(formGroup)
    }
  }

onSubmit(){
  this.isSubmitted=true
  console.log(this.dynamicForm.value)
  if(this.dynamicForm.valid){
    this.submitForm.push(this.dynamicForm.value)
    this.dynamicForm.reset()
    this.isSubmitted=false
  }
}
  getValidations(control:IFormControls):string{
    const myControl = this.dynamicForm.get(control.name)
    let errorMsg='';
    control.validators.forEach((ctrl)=>{
      if(myControl?.hasError(ctrl.validationName as string)){
        errorMsg = ctrl.message as string
      }

    })
    return errorMsg
  }

  editUser(user:any){
    this.editFlag= true
  if(user){
    this.dynamicForm.setValue(user);
  }
  }
  deleteUser(user:any){

  }
  resetForm(){
    this.dynamicForm.reset()
    this.editFlag= false
    this.isSubmitted=false
  }
  updateRecord(){

  }

}
