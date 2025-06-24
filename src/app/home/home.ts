import { Component } from '@angular/core';
import { PSIStatusBadge } from '../shared/components/psi-status-badge/psi-status-badge';

@Component({
  selector: 'app-home',
  imports: [PSIStatusBadge],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true,
})
export class Home {}
