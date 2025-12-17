import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test } from './test';
import { By } from '@angular/platform-browser';

describe('Test',()=>{
let component:Test;
let fixture:ComponentFixture<Test>;

beforeEach(async()=>{
await TestBed.configureTestingModule({
  imports:[Test]
}).compileComponents()

fixture = TestBed.createComponent(Test)
component = fixture.componentInstance;
await fixture.whenStable()

})

it('should create',()=>{
expect(component).toBeTruthy()
})
it('counter should be ini to 0',()=>{
expect(component.counter).toBe(0)
})

 it('should increment',()=>{
    const button = fixture.debugElement.query(By.css('button:first-child'))
    button.triggerEventHandler('click',null);
    fixture.detectChanges()
     const counterText = fixture.debugElement.query(By.css('span')).nativeElement.textContent;
    //const counterText = fixture.debugElement.query(By.css('span')).nativeElement.textContent
    expect(counterText).toBe('1')
  })

   it('should decrement',()=>{
    const button = fixture.debugElement.query(By.css('button:last-child'))
    button.triggerEventHandler('click',null);
    fixture.detectChanges()
     const counterText = fixture.debugElement.query(By.css('span')).nativeElement.textContent;
    //const counterText = fixture.debugElement.query(By.css('span')).nativeElement.textContent
    expect(counterText).toBe('-1')
  })

})
