import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-psi-status-badge',
  imports: [CommonModule],
  templateUrl: './psi-status-badge.html',
  styleUrl: './psi-status-badge.scss',
  standalone: true,
})
export class PSIStatusBadge {
  @Input() statusText: string = '--';
  @Input() badgeSize: 'small' | 'medium' | 'large' = 'small';
  @Input() statusType:
    | 'secondary-high'
    | 'secondary-med'
    | 'secondary'
    | 'info'
    | 'info-med'
    | 'success'
    | 'success-med'
    | 'warning'
    | 'warning-med'
    | 'error'
    | 'error-med' = 'secondary';
}
