import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsiCircleBadge } from './psi-circle-badge';

describe('PsiCircleBadge', () => {
  let component: PsiCircleBadge;
  let fixture: ComponentFixture<PsiCircleBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsiCircleBadge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsiCircleBadge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
