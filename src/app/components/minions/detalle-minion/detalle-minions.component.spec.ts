import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleMinionsComponent } from './detalle-minions.component';

describe('DetalleMinionsComponent', () => {
  let component: DetalleMinionsComponent;
  let fixture: ComponentFixture<DetalleMinionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleMinionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleMinionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
