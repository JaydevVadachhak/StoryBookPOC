import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-psi-circle-badge',
  imports: [CommonModule],
  templateUrl: './psi-circle-badge.html',
  styleUrl: './psi-circle-badge.scss',
})
export class PsiCircleBadge {
  @Input() statusText: string = '--';
  @Input() statusType: 'secondary' | 'success' | 'warning' | 'error' | 'info' =
    'secondary';
}
