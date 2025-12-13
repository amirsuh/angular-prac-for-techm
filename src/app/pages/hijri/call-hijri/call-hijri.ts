import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HijriComp } from '../hijri-comp/hijri-comp';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-call-hijri',
  imports: [HijriComp,CommonModule,ReactiveFormsModule],
  templateUrl: './call-hijri.html',
  styleUrl: './call-hijri.scss',
})
export class CallHijri {
// Inputs from parent
  @Input() rendering: any;
  @Input() errorMessages: Record<string, string> = {};
  @Input() maxIssueDate!: Date;
  @Input() minExpiryDate!: Date;

  travelerData!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.travelerData = this.fb.group({
      travelerId: [''],
      birthDate: [''],
      issueDate: ['', Validators.required],
      expiryDate: [
        null,
        [
          Validators.required,
          this.expiryDateValidator.bind(this) // custom validator
        ]
      ]
    });
  }

  // Example custom validator: expiry date must be >= minExpiryDate and at least 6 months validity
  expiryDateValidator(control: any) {
    const value: Date = control.value;
    if (!value) return null;

    // Less than 6 months validity
    const sixMonthsLater = new Date();
    sixMonthsLater.setMonth(sixMonthsLater.getMonth() + 6);
    if (value < sixMonthsLater) {
      return { expiryDateLessThan6Months: true };
    }

    // Must be after minExpiryDate if provided
    if (this.minExpiryDate && value < this.minExpiryDate) {
      return { minExpiryDateError: true };
    }

    return null;
  }

  // Called when form is submitted
  onSubmit(): void {
    this.submitted = true;
    if (this.travelerData.valid) {
      console.log('Form submitted:', this.travelerData.value);
    } else {
      console.log('Form has errors:', this.travelerData.errors);
    }
  }

}
