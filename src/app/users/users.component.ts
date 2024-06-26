import { Component, OnInit, inject } from '@angular/core';
import { User } from 'src/Model/user.interface';
import { UserService } from '../Services/User.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  users: User[] = [];

  constructor(private userService: UserService, private router: Router) { 
    
  }
  
  ngOnInit(){
    this.userService.getUser().subscribe((user: User[]) => {
      this.users = user;
    });
  }

  
  viewUser(user: User): void{
    this.router.navigate(['/profile/' + user.userId]);
  }
}
