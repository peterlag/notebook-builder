import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepProcessComponent } from './step-process.component';

describe('StepProcessComponent', () => {
  let component: StepProcessComponent;
  let fixture: ComponentFixture<StepProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
