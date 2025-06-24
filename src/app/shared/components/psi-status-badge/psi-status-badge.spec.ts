import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsiStatusBadge } from './psi-status-badge';

describe('PsiStatusBadge', () => {
  let component: PsiStatusBadge;
  let fixture: ComponentFixture<PsiStatusBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsiStatusBadge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsiStatusBadge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
