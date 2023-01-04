import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeDesignComponent } from './size-design.component';

describe('SizeDesignComponent', () => {
  let component: SizeDesignComponent;
  let fixture: ComponentFixture<SizeDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizeDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
