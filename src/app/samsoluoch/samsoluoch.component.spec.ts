import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamsoluochComponent } from './samsoluoch.component';

describe('SamsoluochComponent', () => {
  let component: SamsoluochComponent;
  let fixture: ComponentFixture<SamsoluochComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamsoluochComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamsoluochComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
