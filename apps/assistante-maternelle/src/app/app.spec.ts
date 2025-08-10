import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { Layout } from '@assistante-maternelle/ui';
import { RouterTestingModule } from '@angular/router/testing';

describe('App', () => {
  let component: App;
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, Layout, RouterTestingModule],
    }).compileComponents();
    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("doit créer l'application", () => {
    expect(component).toBeTruthy();
  });
});
