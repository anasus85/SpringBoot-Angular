import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFormatoEtiquetaComponent } from './crear-formato-etiqueta.component';

describe('CrearFormatoEtiquetaComponent', () => {
  let component: CrearFormatoEtiquetaComponent;
  let fixture: ComponentFixture<CrearFormatoEtiquetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearFormatoEtiquetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFormatoEtiquetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
