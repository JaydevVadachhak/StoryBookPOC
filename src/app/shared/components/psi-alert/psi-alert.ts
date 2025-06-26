import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-psi-alert',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './psi-alert.html',
  styleUrl: './psi-alert.scss',
})
export class PsiAlert {
  @Input() title: string = '--';
  @Input() type: 'success' | 'error' | 'warning' | 'info' = 'success';
  @Input() position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'bottom-right';
  @Input() timeout: number = 0;
  public visible: boolean = true;
  public faTimes = faTimes;

  ngOnInit() {
    if (this.visible && this.timeout) {
      setTimeout(() => {
        this.visible = false;
      }, this.timeout);
    } else {
      this.visible = true;
    }
  }

  close() {
    this.visible = false;
  }
}
