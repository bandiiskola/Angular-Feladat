import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeladatfelvitelComponent } from './feladatfelvitel.component';

describe('FeladatfelvitelComponent', () => {
  let component: FeladatfelvitelComponent;
  let fixture: ComponentFixture<FeladatfelvitelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeladatfelvitelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeladatfelvitelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
