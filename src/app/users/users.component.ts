import { Component, OnInit, inject } from '@angular/core';
import { User } from 'src/Model/user.interface';
import { UserService } from '../Services/User.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  user!: User;

  constructor(private userService: UserService) { }
  
  ngOnInit(){
    this.userService.getUser().subscribe(user => {
      this.user = user;
    });
  }
}
