import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumviewComponent } from './forumview.component';

describe('ForumviewComponent', () => {
  let component: ForumviewComponent;
  let fixture: ComponentFixture<ForumviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
