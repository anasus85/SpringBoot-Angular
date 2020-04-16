import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEtiquetaComponent } from './listar-etiqueta.component';

describe('ListarEtiquetaComponent', () => {
  let component: ListarEtiquetaComponent;
  let fixture: ComponentFixture<ListarEtiquetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarEtiquetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEtiquetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
