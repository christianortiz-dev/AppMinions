import { TestBed } from '@angular/core/testing';

import { MinionServicioService } from './minion-servicio.service';

describe('MinionServicioService', () => {
  let service: MinionServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinionServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
