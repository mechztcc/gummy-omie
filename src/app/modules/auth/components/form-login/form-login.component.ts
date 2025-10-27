import { Component } from '@angular/core';
import { CustomInputComponent } from '../../../../shared/components/custom-input/custom-input.component';
import { faCheckCircle, faClose, faLock, faLockOpen, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomButtonComponent } from '../../../../shared/components/custom-button/custom-button.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { ToasterService } from '../../../../shared/services/toastr/toaster.service';
import { Router } from '@angular/router';

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
  isLoading: boolean = false;

  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToasterService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onHandlePassword() {
    this.isHiddenPass = !this.isHiddenPass;
  }

  onSubmit() {
    if (this.form.invalid || this.isLoading) {
      this.form.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    const payload = this.form.value;

    this.authService
      .onLogin(payload)
      .subscribe((resp) => {
        const token = resp.token || '';
        localStorage.setItem('token', token);

        this.toastr.onHandle('Login realizado com sucesso!', 'success');
        this.form.reset();

        this.router.navigate(['/dashboard']);
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
