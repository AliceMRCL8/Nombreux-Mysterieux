import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NAComponent } from './na.component';

describe('NAComponent', () => {
  let component: NAComponent;
  let fixture: ComponentFixture<NAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NAComponent]
    });
    fixture = TestBed.createComponent(NAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
