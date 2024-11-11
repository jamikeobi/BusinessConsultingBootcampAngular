import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialServicesComponent } from './financial-services.component';

describe('FinancialServicesComponent', () => {
  let component: FinancialServicesComponent;
  let fixture: ComponentFixture<FinancialServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinancialServicesComponent]
    });
    fixture = TestBed.createComponent(FinancialServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
