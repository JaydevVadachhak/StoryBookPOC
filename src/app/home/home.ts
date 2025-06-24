import { Component } from '@angular/core';
import { PSIStatusBadgeComponent } from '../shared/components/psi-status-badge/psi-status-badge';

@Component({
  selector: 'app-home',
  imports: [PSIStatusBadgeComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true,
})
export class Home {}
