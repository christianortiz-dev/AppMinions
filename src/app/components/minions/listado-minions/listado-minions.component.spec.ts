import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMinionsComponent } from './listado-minions.component';

describe('ListadoMinionsComponent', () => {
  let component: ListadoMinionsComponent;
  let fixture: ComponentFixture<ListadoMinionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoMinionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoMinionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
