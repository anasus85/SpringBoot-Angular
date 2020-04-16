import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFormatoEtiquetaComponent } from './listar-formato-etiqueta.component';

describe('ListarFormatoEtiquetaComponent', () => {
  let component: ListarFormatoEtiquetaComponent;
  let fixture: ComponentFixture<ListarFormatoEtiquetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarFormatoEtiquetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarFormatoEtiquetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
