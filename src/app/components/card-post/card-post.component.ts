import { Comments } from './../../interfaces/comments';
import { UserService } from './../../services/user.service';
import { Post } from './../../interfaces/post';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent implements OnInit{

  posts!: Post []
  postComments!: Comments []

  constructor(
    public postService: PostService,
    public userService: UserService
  ){

  }
  ngOnInit(): void {
    this.listPosts()
  }

  listPosts(){
    this.postService.showPosts().subscribe(data => {
      this.posts = data;
      console.log(this.posts);
    })
  }

  listPostDetail(id: number){
    this.postService.showPostsComments(id).subscribe(data=>{
      this.postComments = data
    })
  }
}
