import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeladatlistaComponent } from './feladatlista.component';

describe('FeladatlistaComponent', () => {
  let component: FeladatlistaComponent;
  let fixture: ComponentFixture<FeladatlistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeladatlistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeladatlistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
