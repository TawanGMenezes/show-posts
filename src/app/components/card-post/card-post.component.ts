import { CommentsDetailComponent } from './comments-detail/comments-detail.component';
import { Comments } from '../../interfaces/comments.model';
import { UserService } from './../../services/user.service';
import { Post } from '../../interfaces/post.model';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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
    public userService: UserService,
    public dialog: MatDialog
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
      this.showComments(this.postComments)
    })
  }

  showComments(element : Comments []): void{
    const dialogRef = this.dialog.open(CommentsDetailComponent, {
      width: '80%',
      data:{element}
    });
    dialogRef.afterClosed().subscribe(result=>{

    })
  }
}


