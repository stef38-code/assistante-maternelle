import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Layout } from './layout';
import { CommonModule } from '@angular/common';
import { provideRouter } from '@angular/router';

describe('Layout', () => {
  let component: Layout;
  let fixture: ComponentFixture<Layout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Layout, CommonModule],
      providers: [
        provideRouter([]), // Configure le routeur avec des routes vides
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Layout);
    component = fixture.componentInstance;
  });

  it('doit créer le composant', () => {
    fixture.componentRef.setInput('headerTitle', 'Titre');
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('doit définir correctement la valeur de l\'entrée "headerTitle"', () => {
    fixture.componentRef.setInput('headerTitle', 'Titre');
    fixture.detectChanges();
    expect(component.headerTitle()).toBe('Titre');
  });

  it('doit mettre à jour dynamiquement le titre dans la vue', () => {
    fixture.componentRef.setInput('headerTitle', 'Titre initial');
    fixture.detectChanges();
    expect(component.headerTitle()).toBe('Titre initial');

    fixture.componentRef.setInput('headerTitle', 'Titre modifié');
    fixture.detectChanges();
    expect(component.headerTitle()).toBe('Titre modifié');
  });
});
