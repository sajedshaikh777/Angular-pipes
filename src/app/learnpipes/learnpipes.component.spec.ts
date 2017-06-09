import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnpipesComponent } from './learnpipes.component';

describe('LearnpipesComponent', () => {
  let component: LearnpipesComponent;
  let fixture: ComponentFixture<LearnpipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnpipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnpipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
