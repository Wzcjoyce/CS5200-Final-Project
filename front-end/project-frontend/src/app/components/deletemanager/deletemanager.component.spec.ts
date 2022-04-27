import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletemanagerComponent } from './deletemanager.component';

describe('DeletemanagerComponent', () => {
  let component: DeletemanagerComponent;
  let fixture: ComponentFixture<DeletemanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletemanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletemanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
