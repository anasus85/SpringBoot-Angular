import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEtiquetaComponent } from './crear-etiqueta.component';

describe('CrearEtiquetaComponent', () => {
  let component: CrearEtiquetaComponent;
  let fixture: ComponentFixture<CrearEtiquetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearEtiquetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEtiquetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
