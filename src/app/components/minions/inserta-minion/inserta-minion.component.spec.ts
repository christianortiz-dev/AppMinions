import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertaMinionComponent } from './inserta-minion.component';

describe('InsertaMinionComponent', () => {
  let component: InsertaMinionComponent;
  let fixture: ComponentFixture<InsertaMinionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertaMinionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertaMinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
