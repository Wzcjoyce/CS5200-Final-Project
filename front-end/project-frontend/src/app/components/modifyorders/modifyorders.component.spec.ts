import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyordersComponent } from './modifyorders.component';

describe('ModifyordersComponent', () => {
  let component: ModifyordersComponent;
  let fixture: ComponentFixture<ModifyordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyordersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
