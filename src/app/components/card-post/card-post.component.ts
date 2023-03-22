import { Post } from './../../interfaces/post';
import { EnvironmentService } from 'src/app/services/environment.service';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent implements OnInit{
  posts : Array<Post> = []
  constructor(
    public postService: PostService,
  ){

  }
  ngOnInit(): void {
    this.listPosts()
  }

  listPosts(){
    this.postService.showPosts().subscribe(data => {
      this.posts = data;
    })
  }
}
