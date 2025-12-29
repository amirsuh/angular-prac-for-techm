import { Component, computed, inject } from '@angular/core';
import { CardState } from '../../service/card-state';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-feature-card-content',
  imports: [ReactiveFormsModule],
  templateUrl: './feature-card-content.html',
  styleUrl: './feature-card-content.scss',
})
export class FeatureCardContent {
  private readonly state = inject(CardState);
profileForm:any = new FormGroup({
  name: new FormControl('', { validators: [Validators.required] }),
  age: new FormControl(0),
});

isValid = computed(() => this.profileForm.valid());

  changeState(): void {
    console.log(this.state.isCollapsed,'state',this.isValid)
    // debugger
    this.state.toggleCollapsed();
  }
}
