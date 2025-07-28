import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoFormComponent } from './aluno-form.component';

describe('AlunoForm', () => {
  let component: AlunoFormComponent;
  let fixture: ComponentFixture<AlunoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlunoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
