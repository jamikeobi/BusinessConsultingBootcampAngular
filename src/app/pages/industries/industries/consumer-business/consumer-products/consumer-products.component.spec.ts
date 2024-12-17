import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerProductsComponent } from './consumer-products.component';

describe('ConsumerProductsComponent', () => {
  let component: ConsumerProductsComponent;
  let fixture: ComponentFixture<ConsumerProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsumerProductsComponent]
    });
    fixture = TestBed.createComponent(ConsumerProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
