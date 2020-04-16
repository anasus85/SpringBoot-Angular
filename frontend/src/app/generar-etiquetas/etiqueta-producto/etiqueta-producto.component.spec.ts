import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtiquetaProductoComponent } from './etiqueta-producto.component';

describe('EtiquetaProductoComponent', () => {
  let component: EtiquetaProductoComponent;
  let fixture: ComponentFixture<EtiquetaProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtiquetaProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtiquetaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
