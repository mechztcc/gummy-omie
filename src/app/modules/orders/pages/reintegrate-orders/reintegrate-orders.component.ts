import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBoxes, faBoxOpen, faCircleNotch, faHashtag, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { CustomInputComponent } from '../../../../shared/components/custom-input/custom-input.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DashboardService } from '../../../dashboard/shared/services/dashboard.service';
import { ToasterService } from '../../../../shared/services/toastr/toaster.service';

@Component({
  selector: 'app-reintegrate-orders',
  imports: [FontAwesomeModule, CustomInputComponent, ReactiveFormsModule],
  templateUrl: './reintegrate-orders.component.html',
  styleUrl: './reintegrate-orders.component.scss',
})
export class ReintegrateOrdersComponent {
  icons: any = {
    boxes: faBoxes,
    box: faBoxOpen,
    id: faHashtag,
    close: faXmarkCircle,
    load: faCircleNotch,

  };

  multiples: string[] = [];
  isLoadingSingle: boolean = false;
  isLoadingMultiple: boolean = false;


  form: FormGroup;

  constructor(private fb: FormBuilder, private dashboardService: DashboardService, private toastr: ToasterService) {
    this.form = this.fb.group({
      multiple: [''],
      single: ['', Validators.required],
    });
  }

  onSubmitSingle() {
    if (this.form.invalid) {
      return;
    }

    this.isLoadingSingle = true;
    const value = this.form.get('single')?.value;
    const payload = {
      shopify_id: Number(value),
    };

    this.dashboardService
      .onReintegrateSingle(payload)
      .subscribe((data) => {
        this.form.get('single')?.reset();
        this.toastr.onHandle('Orden reintegrada con éxito', 'success');
      })
      .add(() => {
        this.isLoadingSingle = false;
      });
  }

  onSubmitMultiple() {
    if (this.multiples.length === 0) {
      return;
    }

    this.isLoadingMultiple = true;
    const payload = {
      shopify_ids: this.multiples,
    };

    this.dashboardService
      .onReintegrateMultiple(payload)
      .subscribe((data) => {
        this.multiples = [];
        this.toastr.onHandle('Ordens reintegradas com sucesso', 'success');
      })
      .add(() => {
        this.isLoadingMultiple = false;
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
