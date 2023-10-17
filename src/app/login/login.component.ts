import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { last, lastValueFrom } from 'rxjs';
import { UserService } from './service-login.service';
import { Users } from '../interfaces/product';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 

  formLogin = this.formBuilder.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]],
  }, {Validators:this.checkPassword})
  constructor(private formBuilder: FormBuilder, private UserService : UserService) { }
  
  onSubmit(){
    if(this.formLogin.invalid) {return;}
    console.log(this.formLogin.value);
    this.UserService.signIn(this.formLogin.value).subscribe((res) =>{
      console.log(this.formLogin.value);
      
    })
  }
  checkPassword(form : FormGroup){
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if(password === confirmPassword) return null;
    return {notMatch : true}
  }

}
