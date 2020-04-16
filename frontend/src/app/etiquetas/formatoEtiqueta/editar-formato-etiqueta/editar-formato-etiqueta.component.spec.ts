import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFormatoEtiquetaComponent } from './editar-formato-etiqueta.component';

describe('EditarFormatoEtiquetaComponent', () => {
  let component: EditarFormatoEtiquetaComponent;
  let fixture: ComponentFixture<EditarFormatoEtiquetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarFormatoEtiquetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarFormatoEtiquetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
