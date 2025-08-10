import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
  });

  it('devrait être créé', () => {
    fixture.componentRef.setInput('title', 'Titre');
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('devrait avoir un titre par défaut', () => {
    fixture.componentRef.setInput('title', 'Titre');
    fixture.detectChanges();
    expect(component.title).toBeDefined();
  });

  it("devrait mettre à jour le titre lorsqu'il est défini", () => {
    const newTitle = 'Test Title';
    fixture.componentRef.setInput('title', newTitle);
    fixture.detectChanges();
    expect(component.title()).toContain(newTitle);
  });
});
