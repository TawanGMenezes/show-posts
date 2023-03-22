import { Comments } from '../../../interfaces/comments.model';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { Post } from '../../../interfaces/post.model';
import { Component, OnInit,Inject } from '@angular/core';

@Component({
  selector: 'app-comments-detail',
  templateUrl: './comments-detail.component.html',
  styleUrls: ['./comments-detail.component.css']
})
export class CommentsDetailComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { element: Comments [] },
  public dialog: MatDialogRef<CommentsDetailComponent>){}

  ngOnInit(): void {

  }

  closeDialog(){
    this.dialog.close()
  }
}
