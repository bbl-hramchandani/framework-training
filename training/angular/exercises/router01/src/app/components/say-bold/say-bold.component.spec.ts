import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayBoldComponent } from './say-bold.component';

describe('SayBoldComponent', () => {
  let component: SayBoldComponent;
  let fixture: ComponentFixture<SayBoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayBoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayBoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
