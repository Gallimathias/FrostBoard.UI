import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadviewComponent } from './threadview.component';

describe('ThreadviewComponent', () => {
  let component: ThreadviewComponent;
  let fixture: ComponentFixture<ThreadviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreadviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
