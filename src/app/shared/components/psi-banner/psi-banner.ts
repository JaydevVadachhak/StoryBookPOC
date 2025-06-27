import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheckCircle, faExclamationTriangle, faExclamationCircle, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-psi-banner',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './psi-banner.html',
  styleUrl: './psi-banner.scss',
})
export class PsiBanner {
  @Input() subject: string = 'Subject';
  @Input() message: string = 'Message';
  @Input() linkText: string = 'Link';
  @Input() linkUrl: string = '#';
  @Input() buttonText: string = 'Button';
  @Input() type: 'success' | 'warning' | 'error' | 'info' = 'success';
  @Input() showButton: boolean = true;

  public visible: boolean = true;
  public faTimes = faTimes;
  
  getIcon() {
    switch (this.type) {
      case 'success':
        return faCheckCircle;
      case 'warning':
        return faExclamationTriangle;
      case 'error':
        return faExclamationCircle;
      case 'info':
        return faInfoCircle;
      default:
        return faInfoCircle;
    }
  }

  onButtonClick() {
    // Button action can be implemented here or via event emitter
    console.log('Banner button clicked');
  }

  close() {
    this.visible = false;
  }
}
