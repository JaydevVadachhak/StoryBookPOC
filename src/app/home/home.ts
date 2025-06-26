import { Component } from '@angular/core';
import { PSIStatusBadge } from '../shared/components/psi-status-badge/psi-status-badge';
import { PsiCircleBadge } from '../shared/components/psi-circle-badge/psi-circle-badge';
import { PsiAlert } from '../shared/components/psi-alert/psi-alert';

@Component({
  selector: 'app-home',
  imports: [PSIStatusBadge, PsiCircleBadge, PsiAlert],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true,
})
export class Home {}
