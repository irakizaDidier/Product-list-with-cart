import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubstractButtonComponent } from './add-substract-button.component';

describe('AddSubstractButtonComponent', () => {
  let component: AddSubstractButtonComponent;
  let fixture: ComponentFixture<AddSubstractButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSubstractButtonComponent]
    });
    fixture = TestBed.createComponent(AddSubstractButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
