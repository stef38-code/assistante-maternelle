import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGenre } from './image-genre';

describe('ImageGenre', () => {
  let component: ImageGenre;
  let fixture: ComponentFixture<ImageGenre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageGenre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageGenre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
