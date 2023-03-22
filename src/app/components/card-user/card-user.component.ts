import { UserDetailComponent } from './user-detail/user-detail.component';
import { Observable } from 'rxjs';
import { Users } from './../../interfaces/users';
import { EnvironmentService } from './../../services/environment.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {

  users! : Users []

  constructor( public userService : UserService,public dialog: MatDialog){

  }
  ngOnInit(): void {
    this.showUsers()
  }

  showUsers(){
    this.userService.showUsers().subscribe(data=>{
      this.users = data
    })
  }

  showUserDatail(element: Users):void{
    const dialogRef = this.dialog.open(UserDetailComponent, {
      width: '80%',
      data:{element}
    });
    dialogRef.afterClosed().subscribe(result=>{

    })
  }

}
