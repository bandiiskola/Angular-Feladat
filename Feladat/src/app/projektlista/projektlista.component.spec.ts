import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektlistaComponent } from './projektlista.component';

describe('ProjektlistaComponent', () => {
  let component: ProjektlistaComponent;
  let fixture: ComponentFixture<ProjektlistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjektlistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjektlistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
