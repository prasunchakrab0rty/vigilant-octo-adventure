import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenLocationComponent } from './gen-location.component';

describe('GenLocationComponent', () => {
  let component: GenLocationComponent;
  let fixture: ComponentFixture<GenLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
