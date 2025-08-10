import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contrat } from './contrat';

describe('Contrat', () => {
  let component: Contrat;
  let fixture: ComponentFixture<Contrat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contrat],
    }).compileComponents();

    fixture = TestBed.createComponent(Contrat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
