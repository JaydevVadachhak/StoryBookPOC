import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsiAlert } from './psi-alert';

describe('PsiAlert', () => {
  let component: PsiAlert;
  let fixture: ComponentFixture<PsiAlert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsiAlert],
    }).compileComponents();

    fixture = TestBed.createComponent(PsiAlert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
