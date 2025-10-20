import { Component } from '@angular/core';
import { CustomInputComponent } from '../../../../shared/components/custom-input/custom-input.component';
import { faCheckCircle, faClose, faLock, faLockOpen, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomButtonComponent } from '../../../../shared/components/custom-button/custom-button.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  imports: [CustomInputComponent, FontAwesomeModule, CustomButtonComponent, ReactiveFormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss',
})
export class FormLoginComponent {
  icons: any = {
    user: faUser,
    lock: faLock,
    unlock: faLockOpen,
    ok: faCheckCircle,
    error: faClose,
  };

  isHiddenPass: boolean = false;

  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onHandlePassword() {
    this.isHiddenPass = !this.isHiddenPass;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const payload = this.form.value;

    console.log(payload);
  }
}
