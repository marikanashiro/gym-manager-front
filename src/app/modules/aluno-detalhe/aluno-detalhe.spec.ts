import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoDetalhe } from './aluno-detalhe.component';

describe('AlunoDetalhe', () => {
  let component: AlunoDetalhe;
  let fixture: ComponentFixture<AlunoDetalhe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlunoDetalhe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunoDetalhe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
