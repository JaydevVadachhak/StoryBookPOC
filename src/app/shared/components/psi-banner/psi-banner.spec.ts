import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsiBanner } from './psi-banner';

describe('PsiBanner', () => {
  let component: PsiBanner;
  let fixture: ComponentFixture<PsiBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsiBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsiBanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
