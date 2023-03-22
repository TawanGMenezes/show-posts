import { Comments } from './../../../interfaces/comments';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { Post } from './../../../interfaces/post';
import { Component, OnInit,Inject } from '@angular/core';

@Component({
  selector: 'app-comments-detail',
  templateUrl: './comments-detail.component.html',
  styleUrls: ['./comments-detail.component.css']
})
export class CommentsDetailComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { element: Comments [] }){}

  ngOnInit(): void {

  }


}
