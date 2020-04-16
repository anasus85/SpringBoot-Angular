import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarEtiquetasComponent } from './generar-etiquetas.component';

describe('GenerarEtiquetasComponent', () => {
  let component: GenerarEtiquetasComponent;
  let fixture: ComponentFixture<GenerarEtiquetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarEtiquetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarEtiquetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
