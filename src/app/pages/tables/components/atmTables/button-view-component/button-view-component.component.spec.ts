import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonViewComponentComponent } from './button-view-component.component';

describe('ButtonViewComponentComponent', () => {
  let component: ButtonViewComponentComponent;
  let fixture: ComponentFixture<ButtonViewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonViewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
