import { Observable } from 'rxjs';
import { Users } from './../../interfaces/users';
import { EnvironmentService } from './../../services/environment.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {

  users! : Users []

  constructor( public userService : UserService){

  }
  ngOnInit(): void {
    this.showUsers()
  }

  showUsers(){
    this.userService.showUsers().subscribe(data=>{
      this.users = data
    })
  }

}
