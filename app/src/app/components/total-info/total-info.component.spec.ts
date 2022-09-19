import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalInfoComponent } from './total-info.component';

describe('TotalInfoComponent', () => {
  let component: TotalInfoComponent;
  let fixture: ComponentFixture<TotalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
