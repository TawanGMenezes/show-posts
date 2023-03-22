import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from './environment.service';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private env: EnvironmentService) { }

  showUsers(): Observable<Array<Users>>{
    const url : string = this.env.getUsers()
    return this.http.get<Array<Users>>(url)
  }

  showUserDetail(id:number):Observable<Users>{
    const url :string = this.env.getUserDetail(id)
    return this.http.get<Users>(url)
  }
}
