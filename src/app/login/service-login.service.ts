import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IProduct, Users } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(private http : HttpClient ){}

    API_USER = `http://localhost:3000/users`;


     signUp(users:Users):Observable<Users>{
      return this.http.post<Users>(this.API_USER, users) 
    }
    
    signIn(users:Users):Observable<Users>{
        return this.http.post<Users>(`${this.API_USER}`, users)
    }
}
