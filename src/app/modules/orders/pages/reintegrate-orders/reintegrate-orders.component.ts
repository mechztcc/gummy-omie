import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBoxes, faHashtag, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { CustomInputComponent } from '../../../../shared/components/custom-input/custom-input.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reintegrate-orders',
  imports: [FontAwesomeModule, CustomInputComponent, ReactiveFormsModule],
  templateUrl: './reintegrate-orders.component.html',
  styleUrl: './reintegrate-orders.component.scss',
})
export class ReintegrateOrdersComponent {
  icons: any = {
    box: faBoxes,
    id: faHashtag,
    close: faXmarkCircle,
  };

  multiples: string[] = [];

  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      multiple: [''],
      single: [''],
    });
  }

  onConfirmMultiple() {
    const value = this.form.get('multiple')?.value;

    if (!value) {
      return;
    }

    this.multiples.push(value);
    this.form.get('multiple')?.reset();
  }

  onRemove(index: number) {
    console.log(index);
    
    this.multiples.splice(index, 1);
  }
}
