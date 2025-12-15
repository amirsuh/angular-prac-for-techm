import { Component } from '@angular/core';
import { DynamicForm } from "../dynamic-form/dynamic-form";
import { IForm } from '../../shared/interface/dynamic-form.interface';
import { sampleForm } from '../config';

@Component({
  selector: 'app-maincomponent',
  imports: [DynamicForm],
  templateUrl: './maincomponent.html',
  styleUrl: './maincomponent.scss',
})
export class Maincomponent {
formData = sampleForm as IForm

}
