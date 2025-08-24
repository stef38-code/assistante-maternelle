import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptionTable } from './caption-table';

describe('CaptionTable', () => {
  let component: CaptionTable;
  let fixture: ComponentFixture<CaptionTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaptionTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptionTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
