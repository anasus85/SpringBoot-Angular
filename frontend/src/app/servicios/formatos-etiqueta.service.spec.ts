import { TestBed } from '@angular/core/testing';

import { FormatosEtiquetaService } from './formatos-etiqueta.service';

describe('FormatosEtiquetaService', () => {
  let service: FormatosEtiquetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormatosEtiquetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
