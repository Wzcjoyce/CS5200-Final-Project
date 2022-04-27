import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyproviderComponent } from './modifyprovider.component';

describe('ModifyproviderComponent', () => {
  let component: ModifyproviderComponent;
  let fixture: ComponentFixture<ModifyproviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyproviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyproviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
