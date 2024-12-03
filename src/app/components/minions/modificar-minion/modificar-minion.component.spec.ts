import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarMinionComponent } from './modificar-minion.component';

describe('ModificarMinionComponent', () => {
  let component: ModificarMinionComponent;
  let fixture: ComponentFixture<ModificarMinionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarMinionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarMinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
