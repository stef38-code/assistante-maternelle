import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAjouterModifier } from './button-ajouter-modifier';

describe('ButtonAjouterModifier', () => {
  let component: ButtonAjouterModifier;
  let fixture: ComponentFixture<ButtonAjouterModifier>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonAjouterModifier]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonAjouterModifier);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
