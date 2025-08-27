import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoTreino } from './tipo-treino';

describe('TipoTreino', () => {
  let component: TipoTreino;
  let fixture: ComponentFixture<TipoTreino>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoTreino]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoTreino);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
