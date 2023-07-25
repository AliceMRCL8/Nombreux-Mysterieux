import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NUComponent } from './nu.component';

describe('NUComponent', () => {
  let component: NUComponent;
  let fixture: ComponentFixture<NUComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NUComponent]
    });
    fixture = TestBed.createComponent(NUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
