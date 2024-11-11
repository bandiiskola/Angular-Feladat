import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektfelvitelComponent } from './projektfelvitel.component';

describe('ProjektfelvitelComponent', () => {
  let component: ProjektfelvitelComponent;
  let fixture: ComponentFixture<ProjektfelvitelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjektfelvitelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjektfelvitelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
