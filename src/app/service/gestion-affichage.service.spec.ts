import { TestBed } from '@angular/core/testing';

import { GestionAffichageService } from './gestion-affichage.service';

describe('GestionAffichageService', () => {
  let service: GestionAffichageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionAffichageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
