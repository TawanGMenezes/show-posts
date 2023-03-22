import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  constructor() { }

  public getpostUrl(): string {
    return environment.postUrl
  }

  public getcommentsPost(id: number): string {
    return environment.commentsPost + id.toString() + environment.comments
  }

  public getUsers(): string {
    return environment.usersUrl
  }

  public getUserDetail(id:number): string {
    return environment.usersUrl + id.toString()
  }
}
