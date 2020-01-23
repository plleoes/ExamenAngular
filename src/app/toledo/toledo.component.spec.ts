import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToledoComponent } from './toledo.component';

describe('ToledoComponent', () => {
  let component: ToledoComponent;
  let fixture: ComponentFixture<ToledoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToledoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToledoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
