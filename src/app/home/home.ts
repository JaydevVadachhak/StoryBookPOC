import { Component } from '@angular/core';
import { PSIStatusBadge } from '../shared/components/psi-status-badge/psi-status-badge';
import { PsiCircleBadge } from '../shared/components/psi-circle-badge/psi-circle-badge';

@Component({
  selector: 'app-home',
  imports: [PSIStatusBadge, PsiCircleBadge],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true,
})
export class Home {}
