import { Direction } from '@angular/cdk/bidi';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import moment from 'moment';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';

@Component({
  selector: 'app-hijri-comp',
  imports: [
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatIconModule,
    MatSlideToggleModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './hijri-comp.html',
  styleUrl: './hijri-comp.scss',
})
export class HijriComp {
// Inputs from parent
  @Input() setFormGroupName!: FormGroup;
  @Input() setFormControlName!: string;
  @Input() fieldLabel!: string;
  @Input() fieldAriaLabel?: string;
  @Input() fieldId!: any; // template reference variable for datepicker
  @Input() direction: 'ltr' | 'rtl' = 'ltr';
  @Input() isGovtFlowEnabled = false;
  @Input() isBaggageFlow = false;
  @Input() readonly = false;
  @Input() dateFormatLabel = 'DD/MM/YYYY';
  @Input() maxDate?: Date;
  @Input() minDate?: Date;
  @Input() startViewValue: 'month' | 'year' | 'multi-year' = 'month';
  @Input() isMobile = false;
  @Input() toggleHijriflag = false;
  @Input() showHijriCalOption = false;
  @Input() isMMBHijriCalOption?: { mmbPage?: boolean; showHijriCal?: boolean };
  @Input() dictionaryData?: { hijriiCalendar?: string; confirm?: string };
  @Input() calendarToday = 'calendar_today';
  @Input() dateClass!:string
  @Input() startDate!:any
  @Input() endDate!:any

  isDateAllowed:any

  // Custom date class function (optional)
  dateFilter = (date: Date): MatCalendarCellCssClasses => {
  // ...existing code that computes a boolean, e.g.:
  const isAllowed = this.isDateAllowed ? this.isDateAllowed(date) : true; // adapt to your logic

  // Return a CSS class when you want to style the date, otherwise return null
  return isAllowed ? '' : 'disabled-date';
};

  // Event handlers
  onSelection(action?: string) {
    console.log('Date selection', action);
    // Add your logic here
  }

  changeHandler(value: any) {
    console.log('Month/Year selected:', value.value);
  }

  openCalendar() {
    console.log('Calendar opened');
  }

  closeCalendar(event: any) {
    console.log('Calendar closed with:', event);
  }

  onClose() {
    console.log('Calendar closed');
  }

  toggleCalender() {
    this.toggleHijriflag = !this.toggleHijriflag;
    console.log('Hijri toggle:', this.toggleHijriflag);
  }
}







