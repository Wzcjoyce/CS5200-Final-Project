import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmamagerComponent } from './addmamager.component';

describe('AddmamagerComponent', () => {
  let component: AddmamagerComponent;
  let fixture: ComponentFixture<AddmamagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmamagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmamagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
