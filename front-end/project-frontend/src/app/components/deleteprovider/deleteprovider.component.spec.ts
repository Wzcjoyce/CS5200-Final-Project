import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteproviderComponent } from './deleteprovider.component';

describe('DeleteproviderComponent', () => {
  let component: DeleteproviderComponent;
  let fixture: ComponentFixture<DeleteproviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteproviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteproviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
