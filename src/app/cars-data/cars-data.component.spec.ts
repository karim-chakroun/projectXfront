import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsDataComponent } from './cars-data.component';

describe('CarsDataComponent', () => {
  let component: CarsDataComponent;
  let fixture: ComponentFixture<CarsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
