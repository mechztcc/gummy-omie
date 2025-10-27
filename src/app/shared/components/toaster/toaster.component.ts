import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faClose, faExclamationTriangle, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ToasterService } from '../../services/toastr/toaster.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-toaster',
  imports: [FontAwesomeModule, NgClass],
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.scss',
})
export class ToasterComponent {
  icons: any = {
    check: faCheck,
    error: faExclamationTriangle,
    close: faClose
  };

  constructor(public service: ToasterService) {}
}
