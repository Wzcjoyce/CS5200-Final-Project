import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifymanagerComponent } from './modifymanager.component';

describe('ModifymanagerComponent', () => {
  let component: ModifymanagerComponent;
  let fixture: ComponentFixture<ModifymanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifymanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifymanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
