import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service-login.service';
import { lastValueFrom } from 'rxjs';
import { Users } from 'src/app/interfaces/product';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  formSignUp: FormGroup;

  constructor(private formBuilder: FormBuilder, private UserService: UserService) {
    this.formSignUp = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, { validator: this.checkPassword });
  }

  async onSubmit() {
    if (this.formSignUp.valid) {
      const data = await lastValueFrom(this.UserService.signUp(this.formSignUp.value as Users));
      console.log(data);
      alert("Đăng ký thành công");
    } else {
      console.log("Mật khẩu không khớp");
      alert("Mật khẩu không khớp")
      
    }
  }

  checkPassword(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password === confirmPassword) {
      form.get('confirmPassword')?.setErrors(null)
    } else {
      form.get('confirmPassword')?.setErrors({passwordMismatch :true})
    }
  }
}
