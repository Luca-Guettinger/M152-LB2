import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideInImageComponent } from './slide-in-image.component';

describe('SlideInImageComponent', () => {
  let component: SlideInImageComponent;
  let fixture: ComponentFixture<SlideInImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideInImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideInImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
