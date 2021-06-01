import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextSelectComponent } from './context-select.component';

describe('ContextSelectComponent', () => {
  let component: ContextSelectComponent;
  let fixture: ComponentFixture<ContextSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContextSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
