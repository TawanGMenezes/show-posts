import { Users } from '../../../interfaces/users.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { element: Users },
  public dialog: MatDialogRef<UserDetailComponent>){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  closeDialog(){
    this.dialog.close()
  }
}
