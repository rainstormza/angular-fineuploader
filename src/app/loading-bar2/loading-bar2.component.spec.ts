import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingBar2Component } from './loading-bar2.component';

describe('LoadingBar2Component', () => {
  let component: LoadingBar2Component;
  let fixture: ComponentFixture<LoadingBar2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingBar2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingBar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
