import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPageDesignComponent } from './front-page-design.component';

describe('FrontPageDesignComponent', () => {
  let component: FrontPageDesignComponent;
  let fixture: ComponentFixture<FrontPageDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontPageDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontPageDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
