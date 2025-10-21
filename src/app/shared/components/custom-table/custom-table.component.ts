import { Component, input } from '@angular/core';
import { Config } from '../../interfaces/custom-table.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-custom-table',
  imports: [DatePipe],
  templateUrl: './custom-table.component.html',
  styleUrl: './custom-table.component.scss',
})
export class CustomTableComponent {
  data = input<Config>();
}
