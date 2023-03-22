import { Comments } from './../interfaces/comments';
import { Post } from './../interfaces/post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from './environment.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private env: EnvironmentService) { }

  showPosts(): Observable<Array<Post>>{
    const url : string = this.env.getpostUrl()
    return this.http.get<Array<Post>>(url)
  }

  showPostsComments(id: number): Observable<Array<Comments>>{
    const url : string = this.env.getcommentsPost(id)
    return this.http.get<Array<Comments>>(url)
  }
}
