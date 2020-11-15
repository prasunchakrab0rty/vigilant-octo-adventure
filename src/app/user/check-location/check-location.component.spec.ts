import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckLocationComponent } from './check-location.component';

describe('CheckLocationComponent', () => {
  let component: CheckLocationComponent;
  let fixture: ComponentFixture<CheckLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
